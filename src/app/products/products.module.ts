import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: []
})
export class ProductsModule { }
