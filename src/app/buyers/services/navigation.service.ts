import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buyersBuyProductAtMarketPageRoutePath } from '../buyers.routes.paths';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  public toBuyProductsAtMarketPage(marketId: number) {
    const route = buyersBuyProductAtMarketPageRoutePath.replace(':id', marketId.toString());
    this.router.navigate([route]);
  }
}
