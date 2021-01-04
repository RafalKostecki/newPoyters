import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './components/auth/auth.module';
import { UsersModule } from './components/users/users.module';
import { InfoController } from './components/info/info.controller';
import { InfoModule } from './components/info/info.module';
import { InfoService } from './components/info/info.service';
import { MailController } from './components/mail/mail.controller';
import { MailService } from './components/mail/mail.service';
import { MailModule } from './components/mail/mail.module';


const accessString = 'mongodb+srv://new-test-user:9OFB838GLJY0h1vx@cluster0-amydc.mongodb.net/test?retryWrites=true&w=majority';


@Module({
  imports: [
    MongooseModule.forRoot(accessString),
    AuthModule,
    UsersModule,
    InfoModule,
    MailModule,
    ConfigModule.forRoot({
      envFilePath: ['./config/.development.env', './config/.prod.env'],
    })
  ],
  controllers: [AppController, InfoController, MailController],
  providers: [AppService, InfoService, MailService],
})
export class AppModule {}
