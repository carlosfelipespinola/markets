import { AngularFirestore } from '@angular/fire/firestore';
import { ProductData } from './../../products/data-classes/product-data';
import { Injectable } from '@angular/core';
import { Cart } from '../data-classes/Cart';
import { InCartProduct } from '../data-classes/InCartProduct';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly collection = (userid: string) => {
    return `users/${userid}/carts`;
  };

  private readonly pathToCart = (cartid: { userid: string, marketid: string}) => {
    return `${this.collection(cartid.userid)}/${cartid.marketid}`;
  }

  constructor(private readonly afs: AngularFirestore) { }

  public async updateCart(cart: Cart, cartid: { userid: string, marketid: string }) {
    const ref = this.afs.doc(this.pathToCart(cartid));
    await ref.set(cart.toObject(), {merge: true});
  }

  public getCart(cartid: { userid: string, marketid: string }): Observable<Cart> {
    const ref = this.afs.doc(this.pathToCart(cartid));
    return ref.get().pipe(
      map((value) => {
        if(!value.exists) {
          return new Cart();
        }
        return new Cart(value.data());
      })
    )
  }
}
