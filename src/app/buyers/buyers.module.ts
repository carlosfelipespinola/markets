import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuyersRoutingModule } from './buyers.routing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MarketsModule } from '../markets/markets.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BuyProductsAtMarketPageComponent } from './pages/buy-products-at-market-page/buy-products-at-market-page.component';
import { ProductsModule } from '../products/products.module';
import { ProductCardComponentModule } from '../products/components/product-card/product-card-component.module';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { StarRatingModule } from '../ui/star-rating/star-rating.module';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  entryComponents: [],
  declarations: [
    HomePageComponent,
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
    ProductsModule,
    ProductCardComponentModule,
    MatChipsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ScrollingModule,
    LayoutModule,
    FlexLayoutModule,
    MatListModule,
    StarRatingModule,
    MatRippleModule
  ],
})
export class BuyersModule { }
