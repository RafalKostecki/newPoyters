import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule],
  providers: [MailService],
  exports: [MailService],
  controllers: [MailController],
})
export class MailModule {}