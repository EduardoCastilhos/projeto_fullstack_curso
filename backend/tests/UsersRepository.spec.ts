import type { create } from 'domain'
import { inMemoryUsersRepositoryImpl } from 'infra/repositories/in-memory/InMemoryUsersRepository'
import { it, describe, expect } from 'vitest'

//Descreve a entidade que será testada
describe('UsersRepository',()=>{
  //Escrita dos testes

  it('Should ne able to create a new user and find it by id',
    async()=>{
      //testa a criação do usuário
      const repo = new inMemoryUsersRepositoryImpl()
      const user = await repo.create({
        name:'nometeste',
        email:'emailteste@teste.com',
        password:'12345678',
        avatarUrl:'./profile/foto.jpeg'
      })
      //testa se o usuário existe
      const userExist = await repo.findById(user.id)
      expect(userExist).toBeDefined()
      expect(userExist?.email).toBe('emailteste@teste.com')
    }
  ) // fim do teste 1
})