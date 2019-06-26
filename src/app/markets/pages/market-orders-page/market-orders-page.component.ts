import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { Order } from 'src/app/orders/data-classes/Order';
import { Component, OnInit } from '@angular/core';
import { OrderServicesService } from 'src/app/orders/services/order-services.service';
import { NavigationService } from 'src/app/buyers/services/navigation.service';
import { MarketNavigationService } from '../../services/market-navigation.service';

@Component({
  selector: 'app-market-orders-page',
  templateUrl: './market-orders-page.component.html',
  styleUrls: ['./market-orders-page.component.scss']
})
export class MarketOrdersPageComponent implements OnInit {

  public orders: Array<Order> = null;

  constructor(
    private orderServices: OrderServicesService,
    private googleAuthService: GoogleAuthService,
    private marketNavigationService: MarketNavigationService
  ) { }

  ngOnInit() {
    this.googleAuthService.authenticatedUser.subscribe((user) => {
      this.orderServices.getOrdersOfMarket(user.uid).subscribe((orders) => {
        this.orders = orders;
      });
    });
  }

  onOrderClick(order: Order) {
    this.marketNavigationService.toOrderPage(order.uid);
  }

}
