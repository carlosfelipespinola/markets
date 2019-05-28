import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarketData } from '../../data_classes/MarketData';

@Component({
  selector: 'markets-list-of-markets',
  templateUrl: './list-of-markets.component.html',
  styleUrls: ['./list-of-markets.component.scss']
})
export class ListOfMarketsComponent implements OnInit {

  @Input()
  public markets: Array<MarketData>

  @Output()
  public marketClickListener = new EventEmitter<MarketData>();

  constructor() { }

  ngOnInit() {
    if(!this.markets){
      this.markets = [];
    }
  }

  public onMarketClick(market: MarketData){
    this.marketClickListener.emit(market);
  }



}
