import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarketData } from 'src/app/markets/data_classes/MarketData';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BuyersHomePageBottomSheetComponent } from '../../components/buyers-home-page-bottom-sheet/buyers-home-page-bottom-sheet.component';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MarketFilterData } from 'src/app/markets/data_classes/MarketFilterData';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'buyers-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  private _marketFilters = new MarketFilterData();
  private marketFiltersSubscription: Subscription = null;
  public marketFilters = new BehaviorSubject<MarketFilterData>(this._marketFilters);

  public marketsFound: Array<MarketData> = [
    new MarketData({tradeName: "Supermercado Crimeia", rating: 4}),
    new MarketData({tradeName: "Supermercado Jacaré", rating: 5}),
    new MarketData({tradeName: "Supermercado Monteiro", rating: 3.5})
  ];

  constructor(
    private bottomSheet: MatBottomSheet,
    private buyersNavigationService: NavigationService
  ) { }

  ngOnInit() {
    this.marketFiltersSubscription = this.marketFilters.subscribe((value) => {
      this._marketFilters = value;
    });
  }

  ngOnDestroy() {
    if(this.marketFiltersSubscription){
      this.marketFiltersSubscription.unsubscribe();
    }
  }

  public onMarketClick(market: MarketData) {
    const id = 123;
    this.buyersNavigationService.toBuyProductsAtMarketPage(id);
  }

  public onFabClick(){
    let ref = this.bottomSheet.open(BuyersHomePageBottomSheetComponent, {data: new MarketFilterData(this._marketFilters)});
    let subscription = ref.instance.onFilterClickListener.subscribe((filters: MarketFilterData) => {
      this.notifyFiltersChange(filters);
      ref.dismiss();
      subscription.unsubscribe();
    });
  }

  private notifyFiltersChange(newFilters: MarketFilterData){
    this.marketFilters.next(newFilters);
  }

}
