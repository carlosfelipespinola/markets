import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductData } from '../data-classes/product-data';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly collection = (ownerId: string) => {
    return `markets/${ownerId}/products`;
  };

  constructor(
    private readonly afs: AngularFirestore
  ) { }

  public async updateProduct(marketOwnerId: string, product: ProductData) {
    if (!product.uid) {
      product.uid = this.afs.createId();
    }
    const ref = this.afs.doc(`${this.collection(marketOwnerId)}/${product.uid}`);
    await ref.set(product.toObject(), {merge: true});
    return product.uid;
  }

  public getProductById(marketOwnerId: string, productId: string): Observable<ProductData> {
    return this.afs.doc(`${this.collection(marketOwnerId)}/${productId}`).get().pipe(
      map((ref) => {
        return new ProductData(ref.data())
      })
    )
  }

  public getProducts(marketOwnerId: string): Observable<ProductData[]> {
    return this.afs.collection(this.collection(marketOwnerId)).get().pipe(
      map((value) => {
        if (value.empty) {
          return [];
        }
        return value.docs.map((doc) => {
          return new ProductData(doc.data());
        });
      })
    );
  }
}
