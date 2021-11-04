import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = MokedUser & Document;

@Schema()
export class MokedUser extends Document {
  @Prop({ required: true })
  login: string = 'username';
  @Prop()
  password: string = 'password';
  token: any = '123456789';
}

export const MokedUserSchema = SchemaFactory.createForClass(MokedUser);
