import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfMarketsComponent } from './components/list-of-markets/list-of-markets.component';
import { GridOfMarketsComponent } from './components/grid-of-markets/grid-of-markets.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { StarRatingModule } from '../ui/star-rating/star-rating.module';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  entryComponents: [],
  declarations: [ListOfMarketsComponent, GridOfMarketsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    StarRatingModule,
    MatRippleModule
  ],
  exports: [
    ListOfMarketsComponent,
    GridOfMarketsComponent,
  ]
})
export class MarketsModule { }
