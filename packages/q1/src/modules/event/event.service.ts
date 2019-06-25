import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import IEvent from './event.interface';
import EventEntity from './event.entity';
import { CreateEventDto } from './event.dto';

@Injectable()
export default class EventService {
  public constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepo: Repository<IEvent>
  ) {}

  public findAll(): Promise<IEvent[]> {
    return this.eventRepo.find();
  }

  public async create(event: CreateEventDto): Promise<IEvent> {
    return this.eventRepo.save(event);
  }
}
