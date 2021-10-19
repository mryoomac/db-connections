import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  async createNewUser(dto: CreateUserDto): Promise<User> {
    if (!dto.password) {
      console.log('no password specified');
      return;
    }
    if (
      !dto.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
      )
    ) {
      console.log(
        'Password requirements not met',
      );
      return;
    }
    const userInstance = await this.repository.save(dto);
    return userInstance;
  }

  async getAll(): Promise<User[]> {
    return this.repository.find();
  }

  async login(login: string, password: string): Promise<User> {
    return this.repository.login(login, password);
  }
}
