import { Controller, Get, Post } from '@nestjs/common';
import EventService from './event.service';

import Event from './event.entity';
import { EVENT_GROUP } from '../../constants/routes';

@Controller(EVENT_GROUP)
export default class EventController {
  public constructor(private readonly eventService: EventService) {}

  @Get()
  public async findAll(): Promise<Event[]> {
    const events = await this.eventService.findAll();
    return events;
  }

  @Post()
  public async create(): Promise<Event> {
    const createdEvent = await this.eventService.create();
    return createdEvent;
  }
}
