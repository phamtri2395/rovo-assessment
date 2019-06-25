import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Event {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 50 })
  public name: string;
}
