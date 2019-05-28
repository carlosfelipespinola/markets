import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfMarketsComponent } from './components/list-of-markets/list-of-markets.component';
import { GridOfMarketsComponent } from './components/grid-of-markets/grid-of-markets.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { StarRatingModule } from '../ui/star-rating/star-rating.module';
import {MatRippleModule} from '@angular/material/core';
import { FilterMarketsComponent } from './components/filter-markets/filter-markets.component';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [FilterMarketsComponent],
  declarations: [ListOfMarketsComponent, GridOfMarketsComponent, FilterMarketsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    StarRatingModule,
    MatRippleModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    ListOfMarketsComponent,
    GridOfMarketsComponent,
    FilterMarketsComponent
  ]
})
export class MarketsModule { }
