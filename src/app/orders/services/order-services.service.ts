import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Order, IOrder, OrderStatus } from '../data-classes/Order';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {

  private readonly collection = () => {
    return `orders`;
  };

  private readonly pathToOrder = (orderId: string) => {
    return `${this.collection()}/${orderId}`;
  }

  constructor(private readonly afs: AngularFirestore) { }

  public async newOrder(order: Order) {
    order.uid = this.afs.createId();
    const ref = this.afs.doc(this.pathToOrder(order.uid));
    await ref.set(order.toObject(), {merge: true});
    return order.uid;
  }

  public async updateOrderStatus(orderid: string, orderStatus: OrderStatus) {
    const ref = this.afs.doc(this.pathToOrder(orderid));
    await ref.set({ status: orderStatus }, { merge: true });
  }

  public getOrder(uid: string): Observable<Order> {
    const ref = this.afs.doc(this.pathToOrder(uid));
    return ref.get().pipe(
      map((value) => {
        if(!value.exists) {
          return new Order();
        }
        return new Order(value.data());
      })
    )
  }

  public getOrdersOfUser(userUid: string): Observable<Array<Order>> {
    return this.getOrders('userUid', userUid);
  }

  public getOrdersOfMarket(marketUid: string): Observable<Array<Order>> {
    return this.getOrders('marketUid', marketUid);
  }

  private getOrders(field: string, value: string): Observable<Array<Order>> {
    return from(this.afs.firestore.collection(this.collection()).where(field, '==', value).get())
    .pipe(
      map((value) => {
        if(value.empty) {
          return new Array<Order>();
        }
        return value.docs.map((doc) => new Order(doc.data()));
      })
    )
  }
}
