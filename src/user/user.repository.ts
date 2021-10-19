import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';

export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async save(obj: CreateUserDto): Promise<User> {
    obj.token = 'podmiana';
    const user = new this.userModel(obj);
    console.log(user);
    return user.save();
  }

  async find(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
