
import { Controller, Request, Body, Post, Get, Param, Header } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles, AllowAnyRole, Unprotected, Public } from 'nest-keycloak-connect';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post('create')
  @Roles('user')
  async addUser(
    @Body('ssoId') ssoId: string
  ) {
    console.log('addUser', ssoId)
    return await this.usersService.insertUser(ssoId);
  }

  @Get('profile/:ssoId')
  @Roles('user')
  async getUser(@Param('ssoId') ssoId) {
    const user =  await this.usersService.getUser(ssoId);

    console.log('user', user)
    return user;
  }

  @Get('all')
  @Unprotected()
  async allUsers() {
    return await this.usersService.findAll();
  }
}