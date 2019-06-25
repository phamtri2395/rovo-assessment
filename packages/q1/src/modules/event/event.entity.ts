import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { RecurrenceType } from './event.type';

@Entity()
export default class EventEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column('nvarchar', { length: 50 })
  public name: string;

  @Column('bigint', { width: 14 })
  public start: number;

  @Column('bigint', { width: 14 })
  public end: number;

  @Column()
  public duration: number;

  @Column()
  public include: string;

  @Column()
  public exclude: string;
  @Column()
  public recurrence: RecurrenceType;
}
