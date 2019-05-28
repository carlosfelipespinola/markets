import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuyersRoutingModule } from './buyers.routing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MarketsModule } from '../markets/markets.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BuyersHomePageBottomSheetComponent } from './components/buyers-home-page-bottom-sheet/buyers-home-page-bottom-sheet.component';
import { BuyProductsAtMarketPageComponent } from './pages/buy-products-at-market-page/buy-products-at-market-page.component';
import { ProductsModule } from '../products/products.module';

@NgModule({
  entryComponents: [BuyersHomePageBottomSheetComponent],
  declarations: [
    HomePageComponent,
    BuyersHomePageBottomSheetComponent,
    BuyProductsAtMarketPageComponent
  ],
  imports: [
    CommonModule,
    BuyersRoutingModule,
    MatToolbarModule,
    MarketsModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    ProductsModule
  ],
})
export class BuyersModule { }
