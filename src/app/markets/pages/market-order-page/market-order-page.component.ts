import { ActivatedRoute } from '@angular/router';
import { Order, OrderStatus } from 'src/app/orders/data-classes/Order';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { Component, OnInit } from '@angular/core';
import { OrderServicesService } from 'src/app/orders/services/order-services.service';
import { NavigationService } from 'src/app/buyers/services/navigation.service';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-market-order-page',
  templateUrl: './market-order-page.component.html',
  styleUrls: ['./market-order-page.component.scss']
})
export class MarketOrderPageComponent implements OnInit {
  selectedStatus: number = OrderStatus.pending;
  status = [
    {value: OrderStatus.pending, viewValue: 'Pendente'},
    {value: OrderStatus.confirmed, viewValue: 'Confirmado'},
    {value: OrderStatus.outForDelivery, viewValue: 'Saiu para entrega'},
    {value: OrderStatus.delivered, viewValue: 'Entregue ao destinatario'},
    {value: OrderStatus.canceled, viewValue: 'Cancelado'},
  ];

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
      this.selectedStatus = order.status;
      order.products
    })
  }

  public statusChange(matSelect: MatSelect) {
    this.order.status = matSelect.value;
    this.orderServices.updateOrderStatus(this.order.uid, this.order.status);
  }

}
