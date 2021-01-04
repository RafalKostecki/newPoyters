
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.model';
import { MailService } from '../mail/mail.service';
import { Role } from '../../models/role.model';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt");


@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>,
    private readonly mailService: MailService
  ) { }

  async insertUser(username: string, password: string, mail: string) {
    const existingUsers = await this.userModel.find({username: username}).exec(); //todo: replace by this.findMany
    
    if (existingUsers.length > 0) {
      throw new HttpException({
        status: 409,
        error: 'User already exists',
      }, 409);
    } else {
      await bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
          throw new HttpException({
            status: 500,
            error: 'Internal error during crypting a password',
          }, 500);
        } else {
          const newUser = new this.userModel({
            username,
            password: hash,
            mail,
            created: Date.now(),
            role: Role.user
          });
          
          newUser.save();

          try {
            this.mailService.send(
              '"Poyters Team" <no-reply@poyters.pl>',
              mail,
              'Create a new account',
              `Hey ${username}! U created ur a very new Poyters Account`
            )
          } catch (error) {
            throw new HttpException({
              status: 500,
              error: 'Internal error during sending a mail',
            }, 500);
          }
        }
      });
    }
  }

  async findMany(username: string): Promise<IUser[] | undefined> {
    const existingUsers = await this.userModel.find({username: username}).exec();
    return existingUsers;
  }

  async findOne(id: string): Promise<IUser | undefined> {
    const user = await this.userModel.findById(id).exec();

    return user;
  }
}