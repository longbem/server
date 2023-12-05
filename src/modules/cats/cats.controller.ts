import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get('/')
  async findAll(): Promise<{
    message: string;
    status: string;
    data: any;
  }> {
    return this.catsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.catsService.findOne(id);
  }

  @Post('create-cat')
  async create(@Body() createCatDto: CreateCatDto) {
    return await this.catsService.create(createCatDto);
  }

  @Post('update-cat')
  async update(@Body() data: UpdateCat) {
    return await this.catsService.update(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    console.log(
      '🚀 ~ file: cats.controller.ts:31 ~ CatsController ~ delete ~ id:',
      id,
    );
    return this.catsService.delete(id);
  }
}
