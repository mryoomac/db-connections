import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TokenPayload } from 'src/user/authorization/tokenPayload.interface';
import { CreateUserDto } from 'src/user/create-user.dto';
import { User } from 'src/user/user.model';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async hash(dto: CreateUserDto): Promise<any> {
    const bcrypt = require('bcrypt');
    return (dto.password = await bcrypt.hash(dto.password, 10));
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

    if (!isPasswordMatching) {
      throw new UnauthorizedException();
    }

    const payload: TokenPayload = { userId: user.id };
    const newToken = this.jwtService.sign(payload, {
      secret: 'secretkey',
      expiresIn: 6000,
    });
    return newToken;
  }
}
