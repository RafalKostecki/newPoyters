
import { Controller, Request, Response, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req, @Response() res) {
    const result = await this.authService.login(req.user);
    res.cookie('jwt', result.token, {
      expires: new Date(Date.now() + (24*60*60*100)),
      httpOnly: true
    });
    res.status(200).end();
  }

  @Get('logout')
  async logout(@Response() res) {
    res.cookie('jwt', '', {
      expires: new Date(Date.now())
    });
    res.status(200).end();
  };
}