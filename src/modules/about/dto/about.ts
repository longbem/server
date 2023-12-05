import { ApiProperty } from '@nestjs/swagger';

export class CreateAboutDto {
  @ApiProperty({
    description: 'Công ty TNHH BEM',
    default: 'Công ty TNHH BEM',
  })
  company_name: string;

  @ApiProperty({
    description: 'Ha Noi, Viet Nam',
    default: 'Ha Noi, Viet Nam',
  })
  address: string;

  @ApiProperty({
    description: '0971000000',
    default: '0971000000',
  })
  phone_number: string;

  @ApiProperty({
    description: 'admin@gmail.com',
    default: 'admin@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: '21.01511,105.8083025',
    default: '21.01511,105.8083025',
  })
  lat_long: string;
}

export type About = {
  id: number;
  company_name: string;
  email: string;
  phone_number: string | null;
  address: string | null;
  lat_long: string;
};
