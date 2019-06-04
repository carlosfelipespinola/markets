import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarketData } from 'src/app/markets/data_classes/MarketData';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'buyers-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {


  public marketsFound: Array<MarketData> = [
    new MarketData({tradeName: "Supermercado Crimeia", rating: 4}),
    new MarketData({tradeName: "Supermercado Jacaré", rating: 5}),
    new MarketData({tradeName: "Supermercado Monteiro", rating: 3.5})
  ];

  constructor(
    private buyersNavigationService: NavigationService
  ) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
   
  }

  public onMarketClick(market: MarketData) {
    const id = 123;
    this.buyersNavigationService.toBuyProductsAtMarketPage(id);
  }

}
