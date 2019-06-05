import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buyersBuyProductAtMarketPageRoutePath } from '../buyers.routes.paths';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  public toBuyProductsAtMarketPage(marketId: string) {
    const route = buyersBuyProductAtMarketPageRoutePath.replace(':market', marketId);
    this.router.navigate([route]);
  }
}
