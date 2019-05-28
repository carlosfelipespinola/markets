import { Component, OnInit } from '@angular/core';
import { MarketData } from 'src/app/markets/data_classes/MarketData';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'buyers-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public marketsFound: Array<MarketData> = [
    new MarketData({tradeName: "Supermercado Crimeia", rating: 4}),
    new MarketData({tradeName: "Supermercado Jacaré", rating: 5}),
    new MarketData({tradeName: "Supermercado Monteiro", rating: 3.5})
  ];

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  public onMarketClick(market: MarketData){
    
  }

  public onFabClick(){
  }

}
