import {describe, expect, it} from 'vitest'
import { User } from 'domain/entities/User'

describe('Create a new user',()=>{
  it('Should be able to create a new user',()=>{
    const user = new User({
      name: 'Dakakara Nomuro',
      email: 'teste@teste.com',
      password: '1234567',
      avatarUrl:'./fotos/avatar.png'
    })
    // O que eu espero que aconteça
    expect(user.id).toBeDefined()
    expect(user.createdAt).toBeInstanceOf(Date)
    expect(user.email).toBe('teste@teste.com')
    expect(user.avatarUrl).toBe('./fotos/avatar.png')
  }) // fim do teste 1
})