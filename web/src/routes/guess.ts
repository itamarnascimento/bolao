import { FastifyInstance } from "fastify"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import { authenticate } from "../plugins/authenticate"

export async function guessRoutes(fastify: FastifyInstance) {
    fastify.get("/guesses/count", async () => {
        const count = await prisma.guess.count()
        return { count }
    })


    fastify.post("/pools/:poolId/games/:gameId/guesses", { onRequest: [authenticate] },
        async (request, replay) => {
            const createGuessParamns = z.object({
                poolId: z.string(),
                gameId: z.string()
            })

            const createGuessBody = z.object({
                firstTeamPoints: z.number(),
                secondTeamPoints: z.number(),
            })

            const { poolId, gameId } = createGuessParamns.parse(request.params)
            const { firstTeamPoints, secondTeamPoints } = createGuessBody.parse(request.body)

            const participent = await prisma.participent.findUnique({
                where: {
                    userId_poolId: {
                        poolId,
                        userId: request.user.sub
                    }
                }
            })

            if(!participent){
                return replay.status(400).send({
                    massage:"Você ainda não criou palpites para esse bolão"
                })
            }

            const guess = await prisma.guess.findUnique({
                where:{
                    participentId_gameId:{
                        participentId: participent.id,
                        gameId
                    }
                }
            })

            if(guess){
                return replay.status(400).send({
                    massage:"Você já deu seu palpite para esse bolão"
                })
            }

            const  game = await prisma.game.findUnique({
                where:{
                    id: gameId
                }
            })

            if(!game){
                return replay.status(400).send({
                    massage:"Jogo não encontrado"
                })
            }

            if(game.date < new Date()){
                return replay.status(400).send({
                    massage:"Você não eviou o palpite depois do jogo"
                })
            }

            await prisma.guess.create({
                data:{
                    gameId,
                    participentId:participent.id,
                    firstTeamPoints,
                    secondTeamPoints
                }
            })
            return replay.status(201).send()

        })

}