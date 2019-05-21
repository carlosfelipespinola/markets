import { Module } from '@nestjs/common';
import { MarketsController } from './markets.controller';
import { MarketsService } from './markets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MarketSchema } from './market.schema';
import { EncryptionModule } from '../encryption/encryption.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Markets', schema: MarketSchema}
    ]),
    EncryptionModule
  ],
  controllers: [MarketsController],
  providers: [MarketsService]
})
export class MarketsModule {}
