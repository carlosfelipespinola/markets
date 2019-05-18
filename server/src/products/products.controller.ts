import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsServices: ProductsService) {}

    @Get()
    async findAll() {
        return await this.productsServices.findAll()
    }

    @Post()
    async createProduct(@Body() body: any, @Res() res: Response) {
        try {
            const createProduct = await this.productsServices.create(body);
            res.status(HttpStatus.CREATED).json(createProduct);
        } catch (error) {
            const status = error.name === 'ValidationError' ? HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR;
            res.status(status).send(error);
        }
    }
}
