import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, UserLoginInput } from '../user/dto/user';
import { UserService } from '../user/user.service';
import { ApiProperty } from '@nestjs/swagger';

@Controller(['auth', 'api/auth'])
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('register')
  @ApiProperty({
    description: 'Api đăng ký tài khoản user',
  })
  async register(@Body() data: CreateUserDto) {
    try {
      return this.userService.create(data);
    } catch (error) {
      throw error;
    }
  }

  @Post('user-login')
  async loginUser(@Body() data: UserLoginInput) {
    try {
      return this.authService.loginUser(data);
    } catch (error) {
      throw error;
    }
  }
}
