import Fastify, { fastify } from 'fastify'
import { env } from './env'

export async function buildApp(){
  const app = Fastify({logger: true})
  return app
}