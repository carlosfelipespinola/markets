import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Market from './market.interface';
import { EncryptionHashService } from '../encryption/encryption.hash.service';

@Injectable()
export class MarketsService {
  constructor(
    @InjectModel('Markets') private readonly marketsModel: Model<Market>,
    private readonly encryptionHashService: EncryptionHashService
  ) { }

  async create(createMarketDto: any) {
    const createdMarket = new this.marketsModel(createMarketDto);
    if (createdMarket.password) {
      createdMarket.password = await this.encryptionHashService.hash(createdMarket.password);
    }
    const validationError = await createdMarket.validate();
    if (validationError != null) {
      throw validationError;
    }
    await createdMarket.save();
  }
}
