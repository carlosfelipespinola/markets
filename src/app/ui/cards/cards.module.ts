import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneByTwoCardComponent } from './one-by-two-card/one-by-two-card.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [OneByTwoCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [OneByTwoCardComponent]
})
export class CardsModule { }
