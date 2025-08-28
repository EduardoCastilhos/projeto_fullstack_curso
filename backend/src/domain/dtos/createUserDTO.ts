import { z } from 'zod' //validação de dados
import { infer as ZodInfer } from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(3,'Name is too short'),
  email: z.email('Invalid e-mail address'),
  password: z.string().min(6,'Password must have at least 6 characters')
})