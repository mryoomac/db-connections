import { Body, Controller, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Post()
    addNewUser(@Body('name') nazwa : string, @Body('age') wiek : string){
      nazwa = 'awe';
      wiek = 'xd;'
        this.userService.createNewUser(nazwa, wiek);
    }

}