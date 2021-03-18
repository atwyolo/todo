import { IsNotEmpty, IsString } from 'class-validator';

export class requestUserDto {
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
