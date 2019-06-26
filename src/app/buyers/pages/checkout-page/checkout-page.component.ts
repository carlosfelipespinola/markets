import { NavigationService } from 'src/app/buyers/services/navigation.service';
import { Order, OrderStatus } from './../../../orders/data-classes/Order';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { CartService } from './../../../cart/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ICartId, Cart } from 'src/app/cart/data-classes/Cart';
import { BuyerAddressComponent } from '../../forms/buyer-address/buyer-address.component';
import { OrderServicesService } from 'src/app/orders/services/order-services.service';
import { ProductData } from 'src/app/products/data-classes/product-data';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  public cart: Cart;
  @ViewChild('address')
  public addressForm: BuyerAddressComponent;
  public paymentMethod: string = "money";
  public submittingOrder = false;

  private marketUid: string = null;
  private userUid: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private buyersNavigationService: NavigationService,
    private cartService: CartService,
    private orderService: OrderServicesService,
    private googleAuthService: GoogleAuthService,
  ) { 
    this.cart = new Cart();
  }

  ngOnInit() {
    const marketid = this.activatedRoute.snapshot.params.market;
    const userid = this.activatedRoute.snapshot.params.user;
    const cartuid: ICartId = { marketid: marketid, userid: userid };

    this.marketUid = marketid;
    this.userUid = userid;

    this.googleAuthService.authenticatedUser.subscribe((user) => {
      if ( userid !== user.uid ) {
        //TODO navigate to home page
      }
      this.cartService.getCart(cartuid).subscribe((cart) => {
        this.cart = cart;
        this.cart.cartId = cartuid;
      });
    })
  }

  public get disableButton(): boolean {
    if (!this.addressForm) {
      return true;
    }
    return !this.addressForm.isValid || this.cart.isEmpty || this.paymentMethod == null || this.submittingOrder;
  }

  public async submit() {
    const order: Order = new Order();
    order.status = OrderStatus.pending;
    order.deliveryAddress = this.addressForm.address;
    order.marketUid = this.marketUid;
    order.userUid = this.userUid;
    order.products = this.cart.products;
    this.submittingOrder = true;
    const uid = await this.orderService.newOrder(order);
    this.submittingOrder = false;
    this.cartService.updateCart(new Cart(), this.cart.cartId);
    this.buyersNavigationService.toOrder(uid);
    
  }

  public navigateBack() {
    this.buyersNavigationService.toBuyProductsAtMarketPage(this.marketUid);
  }

  public async removeProductFromCart(product: ProductData) {
    if (!this.userUid || !this.marketUid) {
      console.error('Error addProductToCart line 154 of buy-products-at-market-page');
      //TODO show error
      return;
    }
    this.cart.products = this.cart.products.filter((inCartProduct) => inCartProduct.product.uid !== product.uid);
    await this.cartService.updateCart(this.cart, {userid: this.userUid, marketid: this.marketUid});
  }

}
