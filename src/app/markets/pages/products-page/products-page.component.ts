import { MarketNavigationService } from './../../services/market-navigation.service';
import { Subscription } from 'rxjs';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { marketRoutesPathHierarchy } from '../../markets.routes.paths';
import { ProductService } from 'src/app/products/services/product.service';
import { ProductData } from 'src/app/products/data-classes/product-data';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  public products: Array<ProductData> = [];
  private authenticatedUserSubscription: Subscription = null;
  private getProductSubscriptions: Subscription = null;
  constructor(
    private googleAuthService: GoogleAuthService,
    private productService: ProductService,
    public marketNavigationService: MarketNavigationService
  ) { }

  ngOnInit() {
    this.googleAuthService.authenticatedUser.subscribe((user) => {
      this.productService.getProducts(user.uid).subscribe((products) => {
        this.products = products || [];
      })
    });
  }

  ngOnDestroy() {
    if (this.authenticatedUserSubscription) {
      this.authenticatedUserSubscription.unsubscribe();
    }

    if (this.getProductSubscriptions) {
      this.getProductSubscriptions.unsubscribe();
    }
  }

}
