import { Controller, Response, Get } from '@nestjs/common';

@Controller('info')
export class InfoController {

  @Get('check')
  check(@Response() res) {
    return res.status(200).send('OK');
  }
}
