import { NavigationService } from 'src/app/buyers/services/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderServicesService } from 'src/app/orders/services/order-services.service';
import { Order } from 'src/app/orders/data-classes/Order';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  public orderUid: string;
  public order: Order = new Order();

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderServices: OrderServicesService,
    public buyersNavigationServices: NavigationService
  ) { }

  ngOnInit() {
    this.orderUid = this.activatedRoute.snapshot.params.order;
    this.orderServices.getOrder(this.orderUid).subscribe((order) => {
      this.order = order;
      order.products
    })
  }

}
