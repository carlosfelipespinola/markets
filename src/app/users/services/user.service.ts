import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from 'firebase';
import { IUserData } from '../data_classes/UserData';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly collection = 'users';

  constructor(private readonly afs: AngularFirestore) { }

  public async updateUserData({uid, email, role}: IUserData) {
    const data = {uid, email, role};
    const userRef: AngularFirestoreDocument = this.afs.doc(`${this.collection}/${uid}`);
    return userRef.set(data, {merge: true} );
  }

  public getUserDataByUserUid(uid: string) {
    return this.afs.doc<IUserData>(`${this.collection}/${uid}`).get();
  }

  public userIsRegistered(userData: IUserData): boolean {
    if ( userData === null ) {
      return false;
    }
    return userData.uid !== null;
  }
}
