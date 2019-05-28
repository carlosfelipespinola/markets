
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfMarketsComponent } from './list-of-markets.component';
import { MatListModule } from '@angular/material/list';
import { StarRatingModule } from 'src/app/ui/star-rating/star-rating.module';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ ListOfMarketsComponent ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    StarRatingModule,
    MatRippleModule,
  ],
  exports: [ ListOfMarketsComponent ],
  providers: [],
})
export class ListOfMarketsComponentModule {}
