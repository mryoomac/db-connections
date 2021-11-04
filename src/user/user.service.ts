import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';
import { AuthRepository } from 'src/auth/auth.repository';

@Injectable()
export class UserService {
  constructor(
    private repository: UserRepository,
    private authrepository: AuthRepository,
  ) {}

  async createNewUser(dto: CreateUserDto): Promise<User> {
    dto.password = await this.authrepository.hash(dto);
    console.log(`hashzserwisu: ${dto.password}`);
    return await this.repository.save(dto);
  }

  async getAll(): Promise<User[]> {
    return this.repository.find();
  }

  async getNewToken(login: string, password: string): Promise<string> {
    return this.authrepository.getNewToken(login, password);
  }
}
