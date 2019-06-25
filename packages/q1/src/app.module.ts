import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import OrmModule from './modules/orm/orm.module';
import EventModule from './modules/event/event.module';

@Module({
  imports: [OrmModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
