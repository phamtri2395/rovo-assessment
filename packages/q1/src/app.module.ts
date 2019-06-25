import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import OrmModule from './modules/orm';
import EventModule from './modules/event';

@Module({
  imports: [OrmModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
