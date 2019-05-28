import { Component, OnInit } from '@angular/core';
import { MarketData } from 'src/app/markets/data_classes/MarketData';

@Component({
  selector: 'app-buy-products-at-market-page',
  templateUrl: './buy-products-at-market-page.component.html',
  styleUrls: ['./buy-products-at-market-page.component.scss']
})
export class BuyProductsAtMarketPageComponent implements OnInit {

  public market: MarketData;

  constructor() { }

  ngOnInit() {
    this.market = new MarketData({tradeName: 'Supermercado criméia'});
  }

}
