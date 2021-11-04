import { SchemaFactory } from "@nestjs/mongoose";

export class MokedUser {
  login: string = 'username';
  password: string = 'password';
  token: any = '123456789';
}

export const MokedUserSchema = SchemaFactory.createForClass(MokedUser);
