import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {

  constructor(
    private repository: UserRepository
    ) {
    }

    async createNewUser(dto: CreateUserDto){
      await this.repository.save(dto);
      return dto;
    }   
}