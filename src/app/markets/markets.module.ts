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


@NgModule({
  declarations: [
    MarketsComponent,
    HomePageComponent,
    ProductsPageComponent,
    OrdersPageComponent,
    CreateProductPageComponent,
    UpdateProductPageComponent,
    MyBusinessPageComponent
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
    AngularFirestoreModule
  ],
  exports: []
})
export class MarketsModule { }
