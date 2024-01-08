// import { ROLE } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsStrongPassword()
  @ApiProperty({
    description: 'Mật khẩu',
    default: 'Admin@123',
  })
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'Email/username',
    default: 'admin@gmail.com',
  })
  email: string;

  @IsOptional()
  full_name: string;

  @IsOptional()
  phone: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'USER | ADMIN',
    default: 'ADMIN',
  })
  role: 'USER' | 'ADMIN';

  @IsBoolean()
  @ApiProperty({
    description: 'Status',
    default: true,
  })
  status: boolean;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;
}

export class UserLoginInput {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'user name',
    default: 'admin@gmail.com',
  })
  username: string;

  @IsNotEmpty()
  @IsStrongPassword()
  @ApiProperty({
    description: 'Mật khẩu',
    default: 'Admin@123',
  })
  password: string;
}

export type User = {
  id: number;
  password: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  role: 'USER' | 'ADMIN';
  status: boolean;
};
