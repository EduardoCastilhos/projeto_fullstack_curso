import { hash } from 'bcryptjs'
import { CreateUserDTO, createUserSchema } from "domain/dtos/createUserDTO";
import type { IUsersRepository } from "infra/database/IUsersRepository";

export class CreateUserUsecase{
  constructor(private usersRepository:IUsersRepository){}
  async execute(data:CreateUserDTO){
    // 1 - Validação dos dados
    const parsedUser = createUserSchema.parse(data)

    // 2 - Verificar se o email já está cadastrado
    const userAlreadyExists = await this.usersRepository.findByEmail(parsedUser.email)
    // Se o usuário existir emite um erro
    if (userAlreadyExists){
      throw new Error('User already exists')
    }

    // 3 - Criptografa a senha antes de cadastrar
    const passwordHash = await hash(parsedUser.password, 10)

    // 4 - Salva o usuário
    const user = await this.usersRepository.create({
      ...parsedUser,
      password: passwordHash
    })
    return user
  }
}