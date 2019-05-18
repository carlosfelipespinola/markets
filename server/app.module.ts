import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './src/products/products.module';
import { MarketsModule } from './src/markets/markets.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/markets'),
    ProductsModule,
    MarketsModule
  ],
})
export class ApplicationModule {}
