import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const fastify = Fastify()

fastify.register(cors, {
  origin: true
})

fastify.register(appRoutes)

fastify.listen({
  port: 3000,
  host: '0.0.0.0'
}).then((url) => {
  console.log(`Server Http Running on ${url}`);
})