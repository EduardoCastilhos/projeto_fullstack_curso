import type { CreateUserDTO } from 'domain/dtos/createUserDTO';
import { User } from  'domain/entities/User';
import type { IUsersRepository } from 'infra/database/IUsersRepository';

export class inMemoryUsersRepositoryImpl implements IUsersRepository{
  
  //Array que fará o papel do banco de dados
  private users:User[] = []

  async create(data: CreateUserDTO): Promise<User> {
    const user = new User({...data}) // ... spread operator: preenche o que já foi preenchido (caso já tenha sido)
    this.users.push(user) // push: insere algo no array
    return user // retorna o usuário criado
  }

  async findById(id: string): Promise<User | null> {
    // find busca algo dentro do array
    return this.users.find(u=>u.id === id) ?? null
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u=>u.email === email) ?? null
  }

  async findAll(): Promise<User[]> {
    return this.users
  }

  async update(id: string, data: Partial<CreateUserDTO>): Promise<User|null> {
    const userIdx = this.users.findIndex(u=>u.id === id)
    // se o valor for negativo é porque não existe, então retorna nulo
    if(userIdx === -1) return null
    const oldUser = this.users[userIdx] //Dados antigos
    const updateUser = new User({ //Atualização dos dados
      id:oldUser.id,
      name:data.name ?? oldUser.name,
      email:data.email ?? oldUser.email,
      password:data.password ?? oldUser.password,
      avatarUrl:data.avatarUrl ?? oldUser.avatarUrl,
      createdAt:oldUser.createdAt
    })
    this.users[userIdx] = updateUser // Atualiza os dados
    return updateUser // Retorna o usuário atualizado
  }

  async delete(id: string): Promise<void> {
    /*
    Para não excluir nada durante o teste
    é simulada a exclusão do usuário
    mostrando somente os usuários em que o id é diferente
    */
    this.users.filter(u=> u.id !== id)
  }
  
}