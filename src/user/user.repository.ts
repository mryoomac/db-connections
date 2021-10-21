import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';
import TokenPayload from './authorization/tokenPayload.interface';
import { JwtService } from '@nestjs/jwt';

export class UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async save(dto: CreateUserDto): Promise<User> {
    dto.token = 'changetoken';
    const user = new this.userModel(dto);
    console.log(user);
    return user.save();
  }

  async find(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getNewToken(login: string, password: string): Promise<String | null> {
    const user = await this.userModel.findOne({ login });
    if (user && user.password === password) {
      const { password, ...result } = user;
      const payload: TokenPayload = { userId: user.id };
      const newToken = this.jwtService.sign(payload, {
        secret: 'secretkey',
        expiresIn: 6000,
      });
      return newToken;
    }
    return null;
  }
}
