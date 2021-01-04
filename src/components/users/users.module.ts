import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.model';
import { UsersController } from './users.controller';
import { MailModule } from '../mail/mail.module';


@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
    MailModule
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}