import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard,
} from 'nest-keycloak-connect';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './components/auth/auth.module';
import { UsersModule } from './components/users/users.module';
import { InfoController } from './components/info/info.controller';
import { InfoModule } from './components/info/info.module';
import { InfoService } from './components/info/info.service';
import { NewsController } from './components/news/news.controller';
import { NewsModule } from './components/news/news.module';
import { NewsService } from './components/news/news.service';
import { MailController } from './components/mail/mail.controller';
import { MailService } from './components/mail/mail.service';
import { MailModule } from './components/mail/mail.module';
import * as keycloakConfig from './assets/configs/keycloak.config.json';


const accessString = 'mongodb+srv://new-test-user:9OFB838GLJY0h1vx@cluster0-amydc.mongodb.net/test?retryWrites=true&w=majority';

@Module({
  imports: [
    MongooseModule.forRoot(accessString),
    AuthModule,
    UsersModule,
    InfoModule,
    MailModule,
    NewsModule,
    KeycloakConnectModule.register(keycloakConfig),
    ConfigModule.forRoot({
      envFilePath: ['./config/.development.env', './config/.prod.env'],
    })
  ],
  controllers: [
    AppController,
    InfoController,
    MailController,
    NewsController
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
    AppService,
    InfoService,
    MailService,
    NewsService
  ],
})
export class AppModule {}
