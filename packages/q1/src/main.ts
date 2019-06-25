import { NestFactory } from '@nestjs/core';

import AppModule from './modules';
import Swagger from './modules/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // start swagger ui
  Swagger(app);

  await app.listen(3000);
}

bootstrap();
