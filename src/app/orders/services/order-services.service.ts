import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Order, IOrder } from '../data-classes/Order';
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

  public getOrders(userUid: string): Observable<Array<Order>> {
    return from(this.afs.firestore.collection(this.collection()).where('userUid', '==', userUid).get())
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
