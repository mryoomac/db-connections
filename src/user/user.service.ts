import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from "./user.model";
import { Model, Mongoose, Schema, connect} from "mongoose";
import { response } from 'express';
import { UserRepository } from './user.repository';


@Injectable()
export class UserService {

  constructor(
    private repository: UserRepository
    ) {
    }

    createNewUser(nazwa: string, wiek:string){
      this.repository.save({name:nazwa, age:wiek});
        return nazwa;
    }


    
}