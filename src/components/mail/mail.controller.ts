import { Controller, Response, Body, Post, UseGuards, Get } from '@nestjs/common';
import { MailService } from './mail.service';


@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService
  ) {}

  @Post('send')
  async sendMail(
    @Response() res,
    @Body('from') from: string, 
    @Body('to') to: string, 
    @Body('subject') subject: string,
    @Body('text') text: string
  ) {
    try {
      const mailId: string = await this.mailService.send(from, to, subject, text);
      res.status(200).send(`Mail ${mailId} sent`);
    } catch (error) {
      res.status(500).send('Internal server error');
    }  
  }
}
