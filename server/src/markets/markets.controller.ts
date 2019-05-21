import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { MarketsService } from './markets.service';

@Controller('markets')
export class MarketsController {
  constructor(private readonly marketsService: MarketsService) { }

  @Post()
  async createMarket(@Body() body, @Res() response: Response) {
    try {
      const createProduct = await this.marketsService.create(body);
      response.status(HttpStatus.CREATED).json(createProduct);
    } catch (error) {
      const status = error.name === 'ValidationError' ? HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR;
      response.status(status).send(error);
    }
  }
}
