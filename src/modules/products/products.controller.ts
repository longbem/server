import { Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { IAuthGuard } from 'src/common/Authentication';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private product: ProductsService) {}

  @UseGuards(IAuthGuard)
  @Get('products')
  async findAll() {}

  @UseGuards(IAuthGuard)
  @Post('create-product')
  async create() {
    return this.product.create();
  }

  @UseGuards(IAuthGuard)
  @Get(':id')
  async findOne() {}

  @UseGuards(IAuthGuard)
  @Post('update-product')
  async update() {}

  @UseGuards(IAuthGuard)
  @Delete(':id')
  async delete() {}
}
