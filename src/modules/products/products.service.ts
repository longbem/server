import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/share/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create() {
    try {
    } catch (error) {
      console.log('error', error);
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

  async update(data) {
    try {
    } catch (err) {
      console.log('error update user', err);
    }
  }

  async delete(id: number) {}
}
