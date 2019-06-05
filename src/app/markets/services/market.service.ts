import { MarketData } from './../data_classes/MarketData';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  private readonly collection = 'markets';
  constructor(private readonly afs: AngularFirestore) {}

  public getMarketById(uid: string): Observable<MarketData> {
    return this.afs.doc(`${this.collection}/${uid}`).get().pipe(
      map((value) => {
        if (!value.exists) {
          return new MarketData();
        }
        const market = new MarketData(value.data());
        market.uid = value.id;
        return market;
      })
    )
  }

  public getMarkets(): Observable<Array<MarketData>> {
    return this.afs.collection(this.collection).get().pipe(
      map((value) => {
        if (value.empty) {
          return []
        }
        return value.docs.map((doc) => {
          const marketData = new MarketData(doc.data());
          marketData.uid = doc.id;
          return marketData;
        })
      })
    )
  }
}
