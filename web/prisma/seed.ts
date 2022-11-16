import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Itamar",
            email: "itamarasa@gmail.com",
            avatar: "https://github.com/itamarnascimento.png"
        }
    })

    const pool = await prisma.pool.create({
        data: {
            title: "Pool Test",
            code: "OLD333",
            ownerId: user.id,

            Participents: {
                create: {
                    userId: user.id
                }
            }
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-02T15:11:23.068Z',
            firstTeamCountryCode: "DE",
            secondTeamCountryCode: "BR"
        }
    })

    await prisma.game.create({
        data: {
            date: '2022-11-03T15:11:23.068Z',
            firstTeamCountryCode: "BR",
            secondTeamCountryCode: "AR",

            guess: {
                create: {
                    firstTeamPoints: 3,
                    secondTeamPoints: 1,

                    participent:{
                        connect:{
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id
                            }
                        }
                    }
                }
            }
        }
    })
}

main()