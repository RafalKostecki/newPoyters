import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class MailService {
  constructor(private configService: ConfigService) {}

  async send (from: string, to: string, subject: string, text: string): Promise<string> {
    const transporter = nodemailer.createTransport(smtpTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: 465,
      secure: true,
      auth: {
        user: "no-reply@poyters.pl",
        pass: this.configService.get<string>('MAIL_PASSWORD')
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 5000
    }));
  
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text
    });

    return info?.messageId;
  }
}
