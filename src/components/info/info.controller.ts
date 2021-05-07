import { Controller, Response, Get } from '@nestjs/common';
import { InfoService } from './info.service';
import { Unprotected } from 'nest-keycloak-connect';

@Controller('info')
export class InfoController {
  constructor(
    private readonly infoService: InfoService
  ) {}

  @Get('check')
  @Unprotected()
  check(@Response() res) {
    return res.status(200).send('OK');
  }

  @Get('app')
  @Unprotected()
  app() {
    return this.infoService.app();
  }
}
