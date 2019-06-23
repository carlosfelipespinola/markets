import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { buyersRoutesPathHierarchy } from '../buyers.routes.paths';
import { ICartId } from 'src/app/cart/data-classes/Cart';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  public toHome() {
    const fullPath = buyersRoutesPathHierarchy.root.children.findMarket.fullPath;
    this.router.navigate([fullPath]);
  }

  public toFindMarketPage() {
    const fullPath = buyersRoutesPathHierarchy.root.children.findMarket.fullPath;
    this.router.navigate([fullPath]);
  }

  public toBuyProductsAtMarketPage(marketId: string) {
    const fullPath = buyersRoutesPathHierarchy.root.children.buyProductsAtMarket.fullPath;
    const fullPathWithParams = fullPath.replace(':market', marketId);
    this.router.navigate([fullPathWithParams]);
  }

  public toCheckout(cartId: ICartId) {
    const fullPath = buyersRoutesPathHierarchy.root.children.checkout.fullPath;
    const fullPathWithParams = fullPath.replace(':market', cartId.marketid).replace(':user', cartId.userid);
    this.router.navigate([fullPathWithParams]);
  }

  public toOrder(orderId: string) {
    const fullPath = buyersRoutesPathHierarchy.root.children.order.fullPath;
    const fullPathWithParams = fullPath.replace(':order', orderId);
    this.router.navigate([fullPathWithParams]);
  }

  public toOrders() {
    const fullPath = buyersRoutesPathHierarchy.root.children.orders.fullPath;
    this.router.navigate([fullPath]);
  }
}
