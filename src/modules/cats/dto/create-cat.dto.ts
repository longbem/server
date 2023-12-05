import { IsNotEmpty, IsNumber, IsInt, IsOptional } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  age: number;

  @IsNotEmpty()
  breed: string;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;
}
