import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';

export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async save(obj: CreateUserDto): Promise<User> {
    obj.token = 'changetoken'; 
    const user = new this.userModel(obj);
    console.log(user);
    return user.save();
  }

  async find(): Promise<User[]> {
    return this.userModel
      .find().exec();
  }

  async login(login: string, password: string): Promise<User> {
    const user = await this.userModel.findOne({login});
    if (user && user.password === password){
      const { password, ...result } = user;
      console.log (user.token);
      return user;
    } 
    return null;
  }

}
