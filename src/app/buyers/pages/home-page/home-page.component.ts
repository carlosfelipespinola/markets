import { MarketService } from './../../../markets/services/market.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarketData } from 'src/app/markets/data_classes/MarketData';
import { NavigationService } from '../../services/navigation.service';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { HomeNavigationService } from 'src/app/home/services/home-navigation.service';

@Component({
  selector: 'buyers-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {


  public marketsFound: Array<MarketData> = [];
  public isLoadingPageContent = false;

  constructor(
    private buyersNavigationService: NavigationService,
    private marketService: MarketService,
    private googleAuthService: GoogleAuthService,
    private homeNavigationService: HomeNavigationService
  ) { }

  ngOnInit() {
    this.isLoadingPageContent = true;
    this.marketService.getMarkets().subscribe((markets) => {
      this.isLoadingPageContent = false;
      this.marketsFound = markets;
    }, (error) => {
      this.isLoadingPageContent = false;
      console.log(error);
      // TODO show error message
    })
  }

  ngOnDestroy() {
   
  }

  public onMarketClick(market: MarketData) {
    this.buyersNavigationService.toBuyProductsAtMarketPage(market.uid);
  }

  public async logOut() {
    await this.googleAuthService.signOut();
    this.homeNavigationService.navigateToHomePage();
  }

}
