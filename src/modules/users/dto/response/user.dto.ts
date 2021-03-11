import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
