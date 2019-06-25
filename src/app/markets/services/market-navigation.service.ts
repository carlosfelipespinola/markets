import { marketRoutesPathHierarchy } from 'src/app/markets/markets.routes.paths';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarketNavigationService {

  private readonly productsRoutesPaths = marketRoutesPathHierarchy.root.children.productsPage.children;
  private readonly ordersRoutesPaths = marketRoutesPathHierarchy.root.children.ordersPage.children;

  constructor(private router: Router) { }

  public toEditProductPage(productId: string) {
    const url = this.productsRoutesPaths.updateProductPage.fullPath.replace(':product', productId);
    this.router.navigate([url]);
  }

  public toCreateProductPage() {
    const url = this.productsRoutesPaths.createProductPage.fullPath;
    this.router.navigate([url]);
  }

  public toOrderPage(orderUid: string) {
    const url = this.ordersRoutesPaths.orderPage.fullPath.replace(':order', orderUid);
    this.router.navigate([url]);
  }
}
