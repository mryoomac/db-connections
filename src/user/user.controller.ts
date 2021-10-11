import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
}

@Post()
async addNewUser(@Body() dto : CreateUserDto){
  await this.userService.createNewUser(dto);
}

}