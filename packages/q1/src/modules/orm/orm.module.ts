import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { defaultOrm } from './ormConfig';

@Module({
  imports: [TypeOrmModule.forRoot(defaultOrm)],
})
export default class OrmModule {}
