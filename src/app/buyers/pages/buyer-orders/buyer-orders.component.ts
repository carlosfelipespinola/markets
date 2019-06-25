import { NavigationService } from 'src/app/buyers/services/navigation.service';
import { Order } from './../../../orders/data-classes/Order';
import { GoogleAuthService } from './../../../auth/services/google-auth.service';
import { Component, OnInit } from '@angular/core';
import { OrderServicesService } from 'src/app/orders/services/order-services.service';

@Component({
  selector: 'app-buyer-orders',
  templateUrl: './buyer-orders.component.html',
  styleUrls: ['./buyer-orders.component.scss']
})
export class BuyerOrdersComponent implements OnInit {

  public orders: Array<Order> = null;

  constructor(
    private orderServices: OrderServicesService,
    private googleAuthService: GoogleAuthService,
    private buyerNavigationService: NavigationService
  ) { }

  ngOnInit() {
    this.googleAuthService.authenticatedUser.subscribe((user) => {
      this.orderServices.getOrdersOfUser(user.uid).subscribe((orders) => {
        console.log(orders);
        this.orders = orders;
      });
    });
  }

  onOrderClick(order: Order) {
    this.buyerNavigationService.toOrder(order.uid);
  }

}
