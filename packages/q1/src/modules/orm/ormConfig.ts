import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { LOCAL_STORAGE, ENTITY_GLOB } from '../../constants/connections';

export const defaultOrm: TypeOrmModuleOptions = {
  type: 'sqljs',
  entities: [ENTITY_GLOB],
  location: LOCAL_STORAGE,
  autoSave: true,
  synchronize: true,
};
