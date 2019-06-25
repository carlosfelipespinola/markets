import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketsComponent } from './markets.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { MarketsRoutingModule } from './markets.routing';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { UpdateProductPageComponent } from './pages/update-product-page/update-product-page.component';
import { MyBusinessPageComponent } from './pages/my-business-page/my-business-page.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ProductFormComponent } from './forms/product-form/product-form.component';
import {MatRadioModule} from '@angular/material/radio';
import { InputModule } from '../input/input.module';
import { CardsModule } from '../ui/cards/cards.module';
import { MarketOrdersPageComponent } from './pages/market-orders-page/market-orders-page.component';
import { MarketOrderPageComponent } from './pages/market-order-page/market-order-page.component';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    MarketsComponent,
    HomePageComponent,
    ProductsPageComponent,
    OrdersPageComponent,
    CreateProductPageComponent,
    UpdateProductPageComponent,
    MyBusinessPageComponent,
    ProductFormComponent,
    MarketOrdersPageComponent,
    MarketOrderPageComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MarketsRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatRadioModule,
    InputModule,
    CardsModule,
    MatListModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: []
})
export class MarketsModule { }
