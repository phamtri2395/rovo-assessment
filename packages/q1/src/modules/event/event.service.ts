import { join, map, split } from 'ramda';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import EventEntity from './event.entity';
import { IEvent, CreateEventDto } from './event.type';

const entityToEvent = (entity: EventEntity): IEvent => ({
  ...entity,
  include: map(parseInt, split(',', entity.include)),
  exclude: map(parseInt, split(',', entity.exclude)),
});

const eventToEntity = (event: IEvent): EventEntity => ({
  ...event,
  include: join(',', event.include),
  exclude: join(',', event.exclude),
});

@Injectable()
export default class EventService {
  public constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepo: Repository<EventEntity>
  ) {}

  public async findAll(): Promise<IEvent[]> {
    const events: EventEntity[] = await this.eventRepo.find();
    const transformedEvents: IEvent[] = map(entityToEvent, events);

    return transformedEvents;
  }

  public async create(event: CreateEventDto): Promise<IEvent> {
    const payload: EventEntity = eventToEntity(event);
    const createdEvent: EventEntity = await this.eventRepo.save(payload);

    const transformedEvent: IEvent = entityToEvent(createdEvent);

    return transformedEvent;
  }
}
