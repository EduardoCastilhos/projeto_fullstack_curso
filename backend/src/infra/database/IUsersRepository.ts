// Interface: arquivo com métodos abstratos
// Métodos abstratos são um tipo de método sem implementação, somente sua assinatura

//IMPORTAÇÕES
import { CreateUserDTO } from '../../domain/dtos/createUserDTO'
import { User } from '../../domain/entities/User'

//CRIAÇÃO DA INTERFACE
export interface IUsersRepository{
  create(data:CreateUserDTO):Promise<User>
  findById(id:string):Promise<User|null>
  findByEmail(email:string):Promise<User|null>
  findAll():Promise<User[]>
  update(id:string, data:Partial<CreateUserDTO>):Promise<User || null>
  delete(id:string):Promise<void>
}