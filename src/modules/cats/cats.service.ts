import { Injectable } from '@nestjs/common';
import { Cat, UpdateCat } from './interfaces/cat.interface';
import { PrismaService } from 'src/share/prisma.service';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Cat) {
    try {
      const params = {
        ...data,
      };

      const results = await this.prisma.cats.create({
        data: params,
      });

      if (results) {
        return {
          message: 'Tạo Cat thành công.',
          status: 'SUCCESS',
        };
      } else {
        return {
          message: 'Tạo Cat thất bại.',
          status: 'ERROR',
        };
      }
    } catch (err) {
      console.log('err', err);
    }
  }

  async findAll(): Promise<{
    message: string;
    status: string;
    data: any;
  }> {
    try {
      const results = await this.prisma.cats.findMany({});
      if (results?.length) {
        return {
          message: '',
          status: 'SUCCESS',
          data: results,
        };
      } else {
        return {
          message: 'Không tìm thấy thằng nào với id này.',
          status: 'SUCCESS',
          data: [],
        };
      }
    } catch (err) {
      console.log(
        '🚀 ~ file: cats.service.ts:35 ~ CatsService ~ findAll ~ err:',
        err,
      );
      throw err;
    }
  }

  async findOne(id: number) {
    try {
      if (!id) {
        return {
          message: 'Mày không nhập id à?',
          status: 'ERROR',
        };
      }
      const results = await this.prisma.cats.findMany({
        where: {
          id: id,
        },
      });
      if (results?.length) {
        return {
          message: '',
          status: 'SUCCESS',
          data: {
            ...results[0],
          },
        };
      } else {
        return {
          message: 'Không tìm thấy thằng nào với id này.',
          status: 'SUCCESS',
          data: {},
        };
      }
    } catch (err) {
      throw err;
    }
  }

  async update(data: UpdateCat) {
    const catId = data?.catId;

    delete data.catId;
    try {
      await this.prisma.cats.update({
        where: {
          id: catId,
        },
        data: {
          ...data,
        },
      });

      return {
        message: 'Cập nhật Cat thành công.',
        status: 'SUCCESS',
      };
    } catch (err) {
      throw err;
    }
  }

  async delete(id: number) {
    try {
      await this.prisma.cats.delete({
        where: {
          id: id,
        },
      });

      return {
        message: 'Xoá Cat thành công.',
        status: 'SUCCESS',
      };
    } catch (err) {
      throw err;
    }
  }
}
