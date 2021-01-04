import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';


@Module({
  imports: [],
  providers: [InfoService],
  exports: [InfoService],
  controllers: [InfoController],
})
export class InfoModule {}