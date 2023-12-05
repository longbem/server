import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_KEY,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtService, JwtStrategy],
})
export class AuthModule {}
