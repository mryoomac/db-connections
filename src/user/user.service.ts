import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async createNewUser(dto: CreateUserDto): Promise<User> {
    dto.password = await this.repository.hash(dto);
    console.log(`hashzserwisu: ${dto.password}`);
    return await this.repository.save(dto);
  }

  async getAll(): Promise<User[]> {
    return this.repository.find();
  }

  async getNewToken(login: string, password: string): Promise<string> {
    return this.repository.getNewToken(login, password);
  }
}
