import { resolve } from 'path';

export const LOCAL_STORAGE = resolve(__dirname, '../../storage/local.tmp');

export const ENTITY_GLOB = resolve(__dirname, '../**/*.entity{.ts,.js}');
