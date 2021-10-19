import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async addNewUser(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.createNewUser(dto);
  }

  @Get('/getall')
  async getAll() {
    return this.userService.getAll();
  }

  @Post('/login')
  async login(@Body() login: string, password: string): Promise<User> {
    return this.userService.login(login, password);
  }
}
