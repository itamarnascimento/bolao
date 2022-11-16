import Fastify from "fastify";
import jwt from "@fastify/jwt";
import cors from '@fastify/cors';

import { poolsRoutes } from "./routes/pool";
import { userRoutes } from "./routes/user";
import { guessRoutes } from "./routes/guess";
import { gameRoutes } from "./routes/game";
import { authRoutes } from "./routes/auth";


async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true
    })

    // em producao cooca o secret na variavel ambiente
    await fastify.register(jwt, {
        secret: 'nlwcopa'
    })

    await fastify.register(poolsRoutes)
    await fastify.register(userRoutes)
    await fastify.register(guessRoutes)
    await fastify.register(gameRoutes)
    await fastify.register(authRoutes)
    
    await fastify.listen({ port: 3333, host: '0.0.0.0' })
}


bootstrap();