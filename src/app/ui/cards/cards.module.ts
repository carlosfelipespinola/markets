import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneByTwoCardComponent } from './one-by-two-card/one-by-two-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [OneByTwoCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [OneByTwoCardComponent]
})
export class CardsModule { }
