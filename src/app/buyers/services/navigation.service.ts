import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buyersRoutesPathHierarchy } from '../buyers.routes.paths';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  public toHome() {
    const fullPath = buyersRoutesPathHierarchy.root.children.findMarket.fullPath;
    this.router.navigate([fullPath]);
  }

  public toBuyProductsAtMarketPage(marketId: string) {
    const fullPath = buyersRoutesPathHierarchy.root.children.buyProductsAtMarket.fullPath;
    const fullPathWithParams = fullPath.replace(':market', marketId);
    this.router.navigate([fullPathWithParams]);
  }
}
