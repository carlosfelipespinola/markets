import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketsComponent } from './markets.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { MarketsRoutingModule } from './markets.routing';


@NgModule({
  declarations: [MarketsComponent, HomePageComponent, ProductsPageComponent, OrdersPageComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MarketsRoutingModule
  ],
  exports: []
})
export class MarketsModule { }
