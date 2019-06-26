import { MatCardModule } from '@angular/material/card';
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
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { StarRatingModule } from '../ui/star-rating/star-rating.module';
import { MatRippleModule } from '@angular/material/core';
import { CardsModule } from '../ui/cards/cards.module';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import {MatRadioModule} from '@angular/material/radio';
import { BuyerAddressComponent } from './forms/buyer-address/buyer-address.component';
import { ViewOrderComponent } from './pages/view-order/view-order.component';
import { BuyerOrdersComponent } from './pages/buyer-orders/buyer-orders.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  entryComponents: [],
  declarations: [
    HomePageComponent,
    BuyProductsAtMarketPageComponent,
    CheckoutPageComponent,
    BuyerAddressComponent,
    ViewOrderComponent,
    BuyerOrdersComponent
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
    MatRippleModule,
    CardsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
})
export class BuyersModule { }
