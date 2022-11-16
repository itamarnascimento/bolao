import { FastifyInstance } from "fastify"
import ShortUniqueId from "short-unique-id"
import { prisma } from "../lib/prisma"
import { string, z } from 'zod'
import { authenticate } from "../plugins/authenticate"

export async function poolsRoutes(fastify: FastifyInstance) {
    fastify.get("/pools/count", async () => {
        const count = await prisma.pool.count()
        return { count }
    })

    fastify.post("/pools", async (request, reply) => {
        const createPoolBody = z.object({
            title: z.string()
        })

        const { title } = createPoolBody.parse(request.body)
        const generate = new ShortUniqueId({ length: 6 })
        const code = String(generate()).toUpperCase()

        try {
            await request.jwtVerify()
            await prisma.pool.create({
                data: {
                    title,
                    code,
                    ownerId: request.user.sub,

                    Participents: {
                        create: {
                            userId: request.user.sub
                        }
                    }
                }
            })

        } catch {
            await prisma.pool.create({
                data: {
                    title,
                    code
                }
            })
        }

        reply.status(201).send({ code })
    })

    fastify.post("/pools/join",
        { onRequest: [authenticate] }, async (request, replay) => {
            const joinPoolBody = z.object({
                code: z.string()
            })

            const { code } = joinPoolBody.parse(request.body)

            const pool = await prisma.pool.findUnique({
                where: {
                    code,
                },
                include: {
                    Participents: {
                        where: {
                            userId: request.user.sub
                        }
                    }
                }
            })

            if (!pool) {
                return replay.status(400).send({
                    message: "Bolão não encontrado"
                })
            }

            if (pool.Participents.length > 0) {
                return replay.status(400).send({
                    message: "Você ja participa desse Bolão"
                })
            }

            if (!pool.ownerId) {
                await prisma.pool.update({
                    where: {
                        id: pool.id
                    },
                    data: {
                        ownerId: request.user.sub
                    }
                })
            }

            await prisma.participent.create({
                data: {
                    poolId: pool.id,
                    userId: request.user.sub
                }
            })

            return replay.status(201).send()
        })

    fastify.get("/pools",
        { onRequest: [authenticate] }, async (request) => {
            const pools = await prisma.pool.findMany({
                where: {
                    Participents: {
                        some: {
                            userId: request.user.sub
                        }
                    }
                },
                include: {
                    _count: {
                        select: {
                            Participents: true
                        }

                    },
                    Participents: {
                        select: {
                            id: true,
                            user: {
                                select: {
                                    avatar: true
                                }
                            }
                        },
                        take: 4,

                    },
                    owner: {
                        select: {
                            name: true,
                            id: true
                        }
                    }
                }
            })

            return { pools }
        })

    fastify.get("/pools/:id", { onRequest: [authenticate] },
        async (request) => {
            const getPollsParams = z.object({
                id: z.string()
            })

            const { id } = getPollsParams.parse(request.params)
            const pools = await prisma.pool.findUnique({
                where: {
                    id
                },
                include: {
                    _count: {
                        select: {
                            Participents: true
                        }

                    },
                    Participents: {
                        select: {
                            id: true,
                            user: {
                                select: {
                                    avatar: true
                                }
                            }
                        },
                        take: 4,

                    },
                    owner: {
                        select: {
                            name: true,
                            id: true
                        }
                    }
                }
            })

            return { pools }
        })
}