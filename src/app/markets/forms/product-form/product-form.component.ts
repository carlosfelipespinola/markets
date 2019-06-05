import { ProductService } from './../../../products/services/product.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductData } from 'src/app/products/data-classes/product-data';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {

 

  @Input()
  public product: ProductData;
  public status: string;
  public marketOwnerId: string;
  public updatingProduct: boolean;

  constructor(
    private googleAuthService: GoogleAuthService,
    private productService: ProductService
  ) { 
    if (!this.product) {
      this.product = new ProductData();
    }
    this.updatingProduct = false;
  }

  ngOnInit() {
    this.googleAuthService.authenticatedUser.subscribe((user) => {
      this.marketOwnerId = user.uid;
    });
  }

  ngOnDestroy() {
    //if(this.task.)
  }

  public async formSubmited() {
    try {
      this.updatingProduct = true;
      this.product.isAvailable = this.statusToBoolean();
      await this.productService.updateProduct(this.marketOwnerId, this.product);
      this.updatingProduct = true;
    } catch (error) {
      // TODO show error
    }
    
    // TODO navigate to products
  }

  public async uploadedImage(imageUrl: string) {
    try {
      this.updatingProduct = true;
      this.product.images.unshift(imageUrl);
      this.product.uid = await this.productService.updateProduct(this.marketOwnerId, this.product );
      this.updatingProduct = false;
    } catch (error) {
      // TODO show error
    }
    
  }

  private statusToBoolean() {
    return this.status === '1' ? true : false;
  }
}
