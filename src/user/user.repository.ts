import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.model';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './authorization/tokenPayload.interface';

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

  async hash(dto: CreateUserDto): Promise<any> {
    const bcrypt = require('bcrypt');
    const passwordInPlaintext = '12345678';
    return (dto.password = await bcrypt.hash(passwordInPlaintext, 10));
  }

  async getNewToken(login: string, password: string): Promise<string | null> {
    const user = await this.userModel.findOne({ login });

    const bcrypt = require('bcrypt');
    const passwordInPlaintext = '12345678';
    await bcrypt.hash(passwordInPlaintext, 10);
    const isPasswordMatching = await bcrypt.compare(
      passwordInPlaintext,
      user.password,
    );
    console.log(isPasswordMatching);

    if (isPasswordMatching === true) {
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
