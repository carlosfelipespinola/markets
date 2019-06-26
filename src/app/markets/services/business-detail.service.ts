import { MarketData } from 'src/app/markets/data_classes/MarketData';
import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subscription, of, merge } from 'rxjs';
import { UserRoles } from 'src/app/users/data_classes/UserData';
import { IMarketData } from '../data_classes/MarketData';
import { map, take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusinessDetailService {
  private readonly collection = 'markets';
  private marketOfCurrentAuthenticatedOwner: Observable<null | AngularFirestoreDocument>;

  constructor(
    private readonly googleAuthService: GoogleAuthService,
    private readonly afs: AngularFirestore
  ) {
    this.marketOfCurrentAuthenticatedOwner = this.googleAuthService.authenticatedUser.pipe(
      switchMap((user) => {
        if(!user || user.role !== UserRoles.MARKET_OWNER_ROLE) {
          return of(null);
        }
        return of(this.afs.doc(`${this.collection}/${user.uid}`));
      })
    )
  }

  public async updateData(marketData: MarketData) {
  
    const sub = this.marketOfCurrentAuthenticatedOwner.subscribe((docRef) => {
  
      if(docRef === null) {
        sub.unsubscribe();
      }
      docRef.set(marketData.toObject(), {merge: true})
      .then(() => {
        return marketData;
      })
      .catch((error) => {
        //TODO show error
      })
      .finally(() => sub.unsubscribe());
    })
   
  }

  public getData() : Observable<MarketData> {
    return this.marketOfCurrentAuthenticatedOwner.pipe(
      switchMap((value) => {
        if(value === null) {
          return of(new MarketData());
        }
        return value.get().pipe(
          map((value) => {
            return new MarketData(value.data());
          })
        )
      })
    );
  }
}