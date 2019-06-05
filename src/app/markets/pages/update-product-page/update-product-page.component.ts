import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { ProductData } from 'src/app/products/data-classes/product-data';
import { ProductService } from './../../../products/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page.component.html',
  styleUrls: ['./update-product-page.component.scss']
})
export class UpdateProductPageComponent implements OnInit, OnDestroy {

  public product: ProductData;

  private googleAuthSubscription: Subscription = null;
  private productsSubscription: Subscription = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private googleAuthService: GoogleAuthService
    ) { }

  ngOnInit() {
    const productUid = this.activatedRoute.snapshot.params.product;
    this.googleAuthSubscription = this.googleAuthService.authenticatedUser.subscribe((user) => {
      this.productsSubscription = this.productService.getProductById(user.uid, productUid).subscribe((product) => {
        this.product = product;
      })
    });
  }

  ngOnDestroy() {
    if (this.googleAuthSubscription !== null) {
      this.googleAuthSubscription.unsubscribe()
    }

    if (this.productsSubscription !== null) {
      this.productsSubscription.unsubscribe();
    }
  }

}
