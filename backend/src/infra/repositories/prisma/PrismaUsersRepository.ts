import { PrismaClient } from '@prisma/client'
import type { CreateUserDTO } from 'domain/dtos/createUserDTO'
import { User, type UserProps } from 'domain/entities/User'
import type { IUsersRepository } from 'infra/database/IUsersRepository'

export class PrismaUsersRepository implements IUsersRepository{
  
  constructor(private prisma:PrismaClient){}
  
  async create(data: CreateUserDTO): Promise<User> {
    const user = await this.prisma.create({data})
    return user
  }
  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({where:{id}})
    return user
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({where:{email}})
    return user
  }
  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany()
    return users.map((user: UserProps)=> new User(user))
  }
  async update(id: string, data: Partial<CreateUserDTO>): Promise<User | null> {
    try{
      const user = await this.prisma.user.update({
        where:{id},
        data
      })
      return new User(user)
    }catch{
      return null
    }
  }
  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({where:{id}})
  }
}