import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsArray,
  ArrayNotEmpty,
  IsEnum,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export interface IEvent {
  id?: number;
  name: string;
  start: number;
  end: number;
  duration: number;
  include: number[];
  exclude: number[];
  recurrence: RecurrenceType;
}

export enum RecurrenceType {
  none = 'none',
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
  yearly = 'yearly',
}

export class CreateEventDto {
  @ApiModelProperty({
    description: "Event's name",
    type: String,
    required: true,
    example: 'Event Name',
  })
  @IsString()
  @IsNotEmpty()
  public readonly name: string;

  @ApiModelProperty({
    description: "Event's start time (epoch milliseconds)",
    type: Number,
    required: true,
    example: new Date().getTime(),
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly start: number;

  @ApiModelProperty({
    description: "Event's end time (epoch milliseconds)",
    type: Number,
    required: true,
    example: new Date().getTime(),
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly end: number;

  @ApiModelProperty({
    description: "Event's duration (in milliseconds)",
    type: Number,
    default: 0,
    example: 300000, // 5min
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly duration: number;

  @ApiModelProperty({
    description: "Event's custom inclusive dates (epoch milliseconds)",
    type: [Number],
    default: [],
    example: [new Date().getTime()],
  })
  @IsArray()
  @ArrayNotEmpty()
  public readonly include: number[];

  @ApiModelProperty({
    description: "Event's custom exclusive dates (epoch milliseconds)",
    type: [Number],
    default: [],
    example: [new Date().getTime()],
  })
  @IsArray()
  @ArrayNotEmpty()
  public readonly exclude: number[];

  @ApiModelProperty({
    description: "Event's recurrence type",
    enum: ['none', 'daily', 'weekly', 'monthly', 'yearly'],
    default: 'none',
    example: 'daily',
  })
  @IsEnum(RecurrenceType)
  @IsNotEmpty()
  public readonly recurrence: RecurrenceType;
}
