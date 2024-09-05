import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';
import {  ApiProperty } from '@nestjs/swagger'

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
