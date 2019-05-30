import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridOfProductCardsComponent } from './grid-of-product-cards/grid-of-product-cards.component';

@NgModule({
  declarations: [GridOfProductCardsComponent],
  imports: [
    CommonModule
  ],
  exports: [GridOfProductCardsComponent]
})
export class GridOfProductCardsComponentModule { }
