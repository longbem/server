import { Body, Controller, Get, Post } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/about';

@Controller(['about', 'api/about'])
export class AboutController {
  constructor(private about: AboutService) {}

  @Get('/')
  async getAbout() {
    return await this.about.getAbout();
  }

  @Post('update-about')
  async update(@Body() updateAbout: CreateAboutDto) {
    return await this.about.update(updateAbout);
  }
}
