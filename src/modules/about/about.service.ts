import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/share/prisma.service';
import { CreateAboutDto } from './dto/about';

@Injectable()
export class AboutService {
  constructor(private prisma: PrismaService) {}

  async getAbout() {
    try {
      const about = await this.prisma.about.findFirst();
      if (about) {
        return about;
      } else {
        return {
          message: 'Không có thông tin.',
          status: 'SUCCESS',
          data: {},
        };
      }
    } catch (err) {
      throw err;
    }
  }

  async update(data: CreateAboutDto) {
    try {
      const about = await this.prisma.about.findFirst();

      if (about) {
        await this.prisma.about.update({
          where: {
            id: about.id,
          },
          data: {
            ...data,
          },
        });
      } else {
        await this.prisma.about.create({
          data: {
            ...data,
          },
        });
      }
      return {
        message: 'Cập nhật thông tin thành công.',
        status: 'SUCCESS',
        data: {},
      };
    } catch (err) {
      throw err;
    }
  }
}
