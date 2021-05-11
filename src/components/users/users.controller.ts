
import { Controller, Request, Body, Post, Get, Param, Headers } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles, AllowAnyRole, Unprotected, Public } from 'nest-keycloak-connect';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post('create')
  @Roles('user')
  async addUser(@Headers() headers) {
    const token = headers.authorization;
    return await this.usersService.insertUser(token);
  }

  @Get('profile')
  @Roles('user')
  async getUser(@Headers() headers) {
    const token = headers.authorization;
    const user =  await this.usersService.getUser(token);
    return user;
  }

  @Get('all')
  @Unprotected()
  async allUsers() {
    return await this.usersService.findAll();
  }
}