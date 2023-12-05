import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user';

@Controller(['user', 'api/user'])
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post('update-cat')
  async update(@Body() data: CreateUserDto) {
    return this.userService.update(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
