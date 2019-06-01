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


@NgModule({
  declarations: [MarketsComponent, HomePageComponent, ProductsPageComponent, OrdersPageComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MarketsRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: []
})
export class MarketsModule { }
