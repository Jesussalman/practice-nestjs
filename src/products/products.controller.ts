import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
  } from '@nestjs/common';
  import { CreateProductDto } from './dtos/create-product.dto';
  import { UpdateProductDto } from './dtos/update-product.dto';
  import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
      return this.productsService.create(createProductDto);
    }
  
    @Get()
    findAll(@Query() query: object) {
      return this.productsService.findAll(query);
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.productsService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
      return this.update(id, updateProductDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.productsService.remove(id);
    } 
}
