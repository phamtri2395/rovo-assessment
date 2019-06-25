import { Controller, Get, Post } from '@nestjs/common';
import EventService from './event.service';

import { EVENT_GROUP } from '../../constants/routes';

@Controller(EVENT_GROUP)
export default class EventController {
  public constructor(private readonly eventService: EventService) {}

  @Get()
  public findAll(): {} {
    return this.eventService.findAll();
  }

  @Post()
  public create(): Promise<boolean> {
    return this.eventService.create();
  }
}
