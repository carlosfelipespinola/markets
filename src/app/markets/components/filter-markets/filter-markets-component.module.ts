
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMarketsComponent } from './filter-markets.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ FilterMarketsComponent ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [ FilterMarketsComponent ],
  providers: [],
})
export class FilterMarketsComponentModule {}