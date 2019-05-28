import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MarketFilterData } from '../../data_classes/MarketFilterData';

@Component({
  selector: 'markets-filter-markets',
  templateUrl: './filter-markets.component.html',
  styleUrls: ['./filter-markets.component.scss']
})
export class FilterMarketsComponent implements OnInit {

  @Output()
  public filterButtonClickListener: EventEmitter<MarketFilterData> = new EventEmitter();

  @Input()
  public filters: MarketFilterData;

  constructor() { }

  ngOnInit() {
    if(!this.filters){
      this.filters = new MarketFilterData();
    }
  }

  public onFilterButtonClick(){
    this.filterButtonClickListener.emit(this.filters);
  }

}
