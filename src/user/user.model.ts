import { Prop } from '@nestjs/mongoose'
import { Document, Schema } from 'mongoose';

export type UserDocument = User & Document;


export class User extends Document{
  @Prop()
    name: string;

  @Prop()
    age: string;
}

export const UserSchema = new Schema(User);