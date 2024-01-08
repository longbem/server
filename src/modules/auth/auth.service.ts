import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserLoginInput } from '../user/dto/user';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/share/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async loginUser(input: UserLoginInput) {
    const { username, password } = input;
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          {
            email: username,
          },
        ],
      },
    });

    if (!user) {
      throw new UnauthorizedException({
        status: 'WRONG_CREDENTIALS',
        message: 'Tài khoản hoặc Mật khẩu không đúng',
      });
    }
    if (!!user && !user.status) {
      throw new UnauthorizedException({
        status: 'BLOCKED',
        message: 'Tài khoản bị khoá',
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException({
        status: 'WRONG_CREDENTIALS',
        message: 'Tài khoản hoặc Mật khẩu không đúng',
      });
    }
    if (user.role === 'USER' || user.role === 'ADMIN') {
      delete user['password'];
      return {
        ...user,
        accessToken: this.generateToken(user.id),
      };
    }
    throw new UnauthorizedException({
      status: 'WRONG_CREDENTIALS',
      message: 'Lỗi đăng nhập',
    });
  }

  generateToken(userId: number) {
    const token = this.jwtService.sign(
      {
        id: userId,
      },
      {
        secret: process.env.JWT_KEY,
        expiresIn: '2d',
      },
    );
    return token;
  }
}
