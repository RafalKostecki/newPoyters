import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';


@Module({
  imports: [],
  providers: [AuthenticationService],
  exports: [AuthenticationService],
  controllers: [],
})
export class AuthenticationModule {}