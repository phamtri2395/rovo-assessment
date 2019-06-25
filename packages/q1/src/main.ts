import { NestFactory } from '@nestjs/core';

import AppModule from './app.module';
import SwaggerModule from './modules/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // start swagger ui
  SwaggerModule(app);

  await app.listen(3000);
}

bootstrap();
