import { Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
    findAll() {
        return 'hello world';
    }

    @Post()
    createProduct() {
        return 'created';
    }
}
