import { Controller, Get } from '@nestjs/common';
import EventService from './event.service';

import { EVENT_GROUP } from '../../constants/routes';

@Controller(EVENT_GROUP)
export default class EventController {
  public constructor(private readonly eventService: EventService) {}

  @Get()
  public getEvent(): {} {
    return this.eventService.getEvent();
  }
}
