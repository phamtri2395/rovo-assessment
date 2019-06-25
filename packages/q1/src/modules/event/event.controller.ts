import { Controller, Body, Get, Post } from '@nestjs/common';

import EventService from './event.service';
import { IEvent, CreateEventDto } from './event.type';
import { EVENT_GROUP } from '../../constants/routes';

@Controller(EVENT_GROUP)
export default class EventController {
  public constructor(private readonly eventService: EventService) {}

  @Get()
  public async findAll(): Promise<IEvent[]> {
    const events = await this.eventService.findAll();
    return events;
  }

  @Post()
  public async create(@Body() event: CreateEventDto): Promise<IEvent> {
    const createdEvent = await this.eventService.create(event);
    return createdEvent;
  }
}
