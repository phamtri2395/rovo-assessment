import {
  Controller,
  HttpException,
  Body,
  Get,
  Post,
  Param,
  Query,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { RRule } from 'rrule';

import EventService from './event.service';
import { IEvent, CreateEventDto, FreqMap } from './event.type';
// import EventEntity from './event.entity';
import { EVENT_GROUP } from '../../constants/routes';

@Controller(EVENT_GROUP)
export default class EventController {
  public constructor(private readonly eventService: EventService) {}

  @ApiOperation({
    title: 'Get all events',
  })
  @Get()
  public async findAll(): Promise<IEvent[]> {
    const events = await this.eventService.findAll();
    return events;
  }

  @ApiOperation({
    title: 'Create new event',
  })
  @Post()
  public async create(@Body() event: CreateEventDto): Promise<IEvent> {
    const createdEvent = await this.eventService.create(event);
    return createdEvent;
  }

  @ApiOperation({
    title: "Generate an event's schedule",
    description:
      'range is tuple type [from, start], with both from & start are in epoch epoch milliseconds',
  })
  @Get(':event_id')
  public async generateSchedule(
    @Param('event_id') event_id: number,
    @Query('from') from: string,
    @Query('to') to: string
  ): Promise<Date[]> {
    const event: IEvent = await this.eventService.findById(event_id);
    if (!event) throw new HttpException('Event not found', 404);

    const rule = new RRule({
      dtstart: new Date(event.start),
      until: new Date(event.end),
      freq: RRule[FreqMap[event.recurrence]],
    });

    const schedule = rule.between(
      new Date(parseInt(from)),
      new Date(parseInt(to))
    );

    return schedule;
  }
}
