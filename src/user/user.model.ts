import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @Prop({ required: true })
  login: string;
  @Prop()
  password: string;
  @Prop()
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
