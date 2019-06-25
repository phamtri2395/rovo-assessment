import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

import { SWAGGER } from '../../constants/routes';

const OPTIONS = new DocumentBuilder()
  .setTitle('API documentation')
  .setDescription('Version 1.0 of API')
  .setVersion('1.0')
  .build();

export default (app: INestApplication): void => {
  const document = SwaggerModule.createDocument(app, OPTIONS);

  SwaggerModule.setup(SWAGGER, app, document);
};
