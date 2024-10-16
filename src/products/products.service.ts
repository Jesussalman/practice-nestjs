import {
    Injectable,
    InternalServerErrorException,
    NotFoundException,
  } from '@nestjs/common';
  import { UpdateProductDto } from './dtos/update-product.dto';
  import { CreateProductDto } from './dtos/create-product.dto';
  import { ProductEntity } from './entities/product.entity';
  
  @Injectable()
  export class ProductsService {
    private products: ProductEntity[] = [
      {
        id: 1,
        name: 'harina',
        description: 'producto cesta basica ',
        stock: 1000,
        price: 20,
        photo: [],
        isActive: false,
      },
      {
        id: 2,
        name: 'aceite',
        description: 'producto cesta basica ',
        stock: 800,
        price: 50,
        photo: [],
        isActive: true,
      },
      {
        id: 3,
        name: 'sal',
        description: 'producto cesta basica ',
        stock: 1000,
        price: 10,
        photo: [],
        isActive: true,
      },     
      {
        id: 4,
        name: 'arroz',
        description: 'producto cesta basica ',
        stock: 1000,
        price: 60,
        photo: [],
        isActive: true,
      },
    ];
  
    create(createProductDto: CreateProductDto) {
      return createProductDto;
    }
  
    async findAll(query: object): Promise<ProductEntity[]> {
      try {
        if (this.products.length === 0) {
          throw new NotFoundException('Products not found!');
        }
        return this.products;
      } catch (error) {
        throw new InternalServerErrorException('No se que paso...');
      }
    }
  
    async findOne(id: number): Promise<ProductEntity> {
      try {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
          throw new NotFoundException('Product not found!');
        }
  
        return product;
      } catch (error) {
        throw new InternalServerErrorException(error);
      }
    }
  
    update(id: number, updateProductDto: UpdateProductDto) {
      return {
        id,
        updateProductDto,
      };
    }
  
    remove(id: number) {
      return { id };
    }
  }
  