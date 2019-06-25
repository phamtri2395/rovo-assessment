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

  public async findAll(): Promise<Event[]> {
    const result = await this.eventRepo.find();
    console.log('get result', result);

    return result;
  }

  public async create(): Promise<boolean> {
    const result = await this.eventRepo.save({ name: 'Test' });
    console.log('create result', result);

    return true;
  }
}
