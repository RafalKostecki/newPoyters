
import { Controller, Request, Body, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post('users/create')
  async addUser(
    @Body('username') username: string, 
    @Body('password') password: string, 
    @Body('mail') mail: string
  ) {
    const generatedId = await this.usersService.insertUser(username, password, mail);

    return {id: generatedId};
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('users/profile')
  async userProfile(@Request() req) {
    return req.user
  }
}