import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import IEvent from './event.interface';

@Entity()
export default class EventEntity implements IEvent {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 50 })
  public name: string;
}
