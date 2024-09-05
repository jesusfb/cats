import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';
import {  ApiProperty } from '@nestjs/swagger'

export class LoginDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
