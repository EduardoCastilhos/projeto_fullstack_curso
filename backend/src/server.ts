import { env } from './env'
import { buildApp } from './app'

async function startServer(){
  const app = await buildApp()
  await app.listen({host:'0.0.0.0',port:env.PORT})
  console.log(`Server listening port ${env.PORT}`)
}
startServer()