
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt");


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const users = await this.usersService.findMany(username);

    if (users.length < 1) throw new UnauthorizedException();
    
    if (bcrypt.compareSync(pass, users[0].password)) {
      const { password, ...result } = users[0];
      return result;
    } else {
      return null;
    }
  }

  
  async login(user: any) {
    const payload = { username: user._doc.username, sub: user._doc._id };
    const token = this.jwtService.sign(payload);
    return {
      token
    }
  }
}