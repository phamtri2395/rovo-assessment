import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiModelProperty({
    description: "Event's name",
    type: String,
    required: true,
  })
  @IsNotEmpty()
  public readonly name: string;
}
