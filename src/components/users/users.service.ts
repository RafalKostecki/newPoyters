
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.model';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>
  ) { }

  async insertUser(ssoId: string) {
    const existingUser = await this.findBySsoId(ssoId); //todo: replace by this.findMany

    console.log('existingUser', existingUser)
    
    if (existingUser) {
      throw new HttpException({
        status: 409,
        error: 'User already exists',
      }, 409);
    } else {
      const newUser = new this.userModel({
        ssoId,
        description: '',
        avatar: '',
        created: Date.now()
      });

      newUser.save();

      return newUser;
    }
  }

  async getUser(ssoId: string): Promise<IUser> {
    const user = await this.findBySsoId(ssoId);

    console.log('get user', user);

    if (!user) {
      throw new HttpException({
        status: 404,
        error: 'User not found',
      }, 404);
    }

    return user;
  };

  private async findBySsoId(ssoId: string): Promise<IUser | undefined> {
    return this.userModel.findOne({ssoId: ssoId}).exec();
  }

  private async findOne(id: string): Promise<IUser | undefined> {
    return this.userModel.findById(id).exec();
  }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }
}