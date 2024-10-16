import {
    IsArray,
    IsBoolean,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MinLength,
  } from 'class-validator';
import { ProductEntity } from '../entities/product.entity';
  
  export class PaginationDto {
    @IsOptional()
    @IsNumber()
    page: number = 1;
    
    @IsOptional()
    @IsNumber()
    limit: number = 10;

    @IsOptional()
    @IsNumber()
    total: number;

    @IsOptional()
    @IsNumber()
    lastpage: number;

    @IsOptional()
    
    data: ProductEntity;
  }