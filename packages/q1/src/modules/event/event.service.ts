import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Event from './event.entity';

@Injectable()
export default class EventService {
  public constructor(
    @InjectRepository(Event)
    private readonly eventRepo: Repository<Event>
  ) {}

  public findAll(): Promise<Event[]> {
    return this.eventRepo.find();
  }

  public async create(): Promise<Event> {
    return this.eventRepo.save({ name: 'Test' });
  }
}
