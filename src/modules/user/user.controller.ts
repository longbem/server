import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user';
import { IAuthGuard } from 'src/common/Authentication';

@Controller(['user', 'api/user'])
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(IAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  async getMyProfile(@Request() req) {
    return this.userService.getMyProfile(req.user);
  }

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
