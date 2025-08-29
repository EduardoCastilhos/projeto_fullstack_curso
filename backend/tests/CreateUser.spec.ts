import { User } from 'domain/entities/User'
import { describe, expect, it } from 'vitest'

//O teste que desejo fazer
describe('Create a new user',()=>{
  //O que deve acontecer
  it('Should be able to create a new user',()=>{
    const user = new User({
      name: 'Dakakara Nomuro',
      email: 'teste@teste.com',
      password: '1234567',
      avatarUrl: './fotos/avatar.png'
    })
    //O que espero que aconteça
    expect(user.id).toBeDefined()
    expect(user.createdAt).toBeInstanceOf(Date)
    expect(user.email).toBe('teste@teste.com')
    expect(user.avatarUrl).toBe('./fotos/avatar.png')
  }) // Fim do teste 1
})