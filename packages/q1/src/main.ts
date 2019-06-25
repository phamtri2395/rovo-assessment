import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import AppModule from './app.module';
import SwaggerModule from './modules/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // validate all endpoints input
  app.useGlobalPipes(new ValidationPipe());

  // start swagger ui
  SwaggerModule(app);

  await app.listen(3000);
}

bootstrap();
