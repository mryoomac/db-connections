import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';
import { JwtService } from '@nestjs/jwt';

export class UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async save(dto: CreateUserDto): Promise<User> {
    return new this.userModel(dto).save();
  }

  async find(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
