
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.model';
import { AuthenticationService } from '../authentication/authentication.service';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>,
    private authenticationService: AuthenticationService,
  ) { }

  async insertUser(token: string) {
    const ssoId = await this.authenticationService.authenticate(token);
    const existingUser = await this.findBySsoId(ssoId);
    
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

  async getUser(token: string): Promise<IUser> {
    const ssoId = await this.authenticationService.authenticate(token);
    const user = await this.findBySsoId(ssoId);

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

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }
}