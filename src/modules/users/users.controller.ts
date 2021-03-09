import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/response/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }
}
