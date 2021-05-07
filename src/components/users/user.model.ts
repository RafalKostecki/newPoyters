import * as mongoose from 'mongoose';


export interface IUser extends mongoose.Document {
  id: number | string
  created: number
  description: string
  ssoId: string
  avatar: string
};

export const UserSchema = new mongoose.Schema({
  created: { type: Number, required: true },
  ssoId: { type: String, required: true, unique: true },
  description: { type: String },
  avatar: { type: String },
})