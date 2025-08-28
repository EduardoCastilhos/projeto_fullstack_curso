import 'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.url({message:'Digite uma URL válida!'}),
  PORT: z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
  console.error('Erro ao configurar as variáveis de ambiente')
  throw new Error('Variáveis de ambiente inválidas')
}

export const env = _env.data