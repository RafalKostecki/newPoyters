
import { Controller, Request, Body, Post, UseGuards, Get, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post('create')
  async addUser(
    @Body('username') username: string, 
    @Body('password') password: string, 
    @Body('mail') mail: string
  ) {
    const generatedId = await this.usersService.insertUser(username, password, mail);

    return {id: generatedId};
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async userProfile(@Request() req) {
    const user = await this.usersService.findOne(req?.user?.id);
    return user;
  }
}