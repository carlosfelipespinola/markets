import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MarketFilterData } from 'src/app/markets/data_classes/MarketFilterData';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-buyers-home-page-bottom-sheet',
  templateUrl: './buyers-home-page-bottom-sheet.component.html',
  styleUrls: ['./buyers-home-page-bottom-sheet.component.scss']
})
export class BuyersHomePageBottomSheetComponent implements OnInit {

  public onFilterClickListener: EventEmitter<MarketFilterData> = new EventEmitter();

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: MarketFilterData) { }

  ngOnInit() {
  }

  public onFilterClick(filter: MarketFilterData){
    this.onFilterClickListener.emit(filter);
  }

}
