
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyersHomePageBottomSheetComponent } from './buyers-home-page-bottom-sheet.component';
import { FilterMarketsComponentModule } from 'src/app/markets/components/filter-markets/filter-markets-component.module';

@NgModule({
  entryComponents: [ BuyersHomePageBottomSheetComponent ],
  declarations: [ BuyersHomePageBottomSheetComponent ],
  imports: [ CommonModule, FilterMarketsComponentModule ],
  exports: [ BuyersHomePageBottomSheetComponent ],
  providers: [],
})
export class BuyersHomePageBottomSheetComponentModule {}