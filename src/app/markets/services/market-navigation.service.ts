import { Injectable } from '@angular/core';
import { marketRoutesPathHierarchy } from '../markets.routes.paths';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarketNavigationService {

  private readonly productsRoutesPaths = marketRoutesPathHierarchy.root.children.productsPage.children;

  constructor(private router: Router) { }

  public toEditProductPage(productId: string) {
    const url = this.productsRoutesPaths.updateProductPage.fullPath.replace(':product', productId);
    this.router.navigate([url]);
  }

  public toCreateProductPage() {
    const url = this.productsRoutesPaths.createProductPage.fullPath;
    this.router.navigate([url]);
  }
}
