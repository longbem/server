import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/share/prisma.service';
import { CreateUserDto, User } from './dto/user';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email: data?.email,
        },
      });

      if (user) {
        throw new BadRequestException({
          status: 'USER_HAS_BEEN_CREATED',
          message: 'Người dùng đã được tạo',
        });
      }

      const hashPass = await bcrypt.hash(data?.password, 10);
      await this.prisma.user.create({
        data: {
          ...data,
          password: hashPass,
        },
      });

      return {
        message: 'Tạo người dùng thành công.',
        status: 'SUCCESS',
      };
    } catch (err) {
      throw err;
    }
  }

  async getMyProfile(userInfo: User) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email: userInfo?.email,
        },
      });
      if (user) {
        delete user.password;
        delete user.createdAt;
        delete user.updatedAt;

        return {
          data: user,
          message: '',
          status: 'SUCCESS',
        };
      } else {
        return {
          data: user,
          message: 'Không tìm thấy user',
          status: 'SUCCESS',
        };
      }
    } catch (err) {
      console.log('error find all user', err);
    }
  }

  async findAll() {
    try {
    } catch (err) {
      console.log('error find all user', err);
    }
  }

  async findOne(id: number) {
    try {
    } catch (err) {
      console.log('error find one user', err);
    }
  }

  async update(data: CreateUserDto) {
    try {
    } catch (err) {
      console.log('error update user', err);
    }
  }

  async delete(id: number) {}
}
