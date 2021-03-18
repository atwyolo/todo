import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/response/user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { requestUserDto } from './dto/request/requestUserDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: number): Promise<UserDto> {
    return this.usersService.findOne(id);
  }

  @Post()
  createOne(@Body() user: requestUserDto): Promise<UserDto> {
    return this.usersService.createOne(user);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number): Promise<DeleteResult> {
    return this.usersService.deleteOne(id);
  }

  @Put(':id')
  updateOne(
    @Param('id') id: number,
    @Body() user: requestUserDto,
  ): Promise<UpdateResult> {
    return this.usersService.updateOne(id, user);
  }
}
