import { Injectable } from '@angular/core';
import { UserData } from '../../users/data_classes/UserData';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth, User } from 'firebase';
import { UserService } from 'src/app/users/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  public authenticatedUser: Observable<UserData>;

  constructor(
    private readonly firebaseAuth: AngularFireAuth,
    private readonly userService: UserService
  ) {
    this.authenticatedUser = this.firebaseAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.userService.getUserDataByUserUid(user.uid).pipe(
            map((userData) => {
              return new UserData(userData.data());
            })
          );
        } else {
          return of(null);
        }
      })
    );
  }

  public async signIn(): Promise<auth.UserCredential> {
    const provider = new auth.GoogleAuthProvider();
    return this.firebaseAuth.auth.signInWithPopup(provider);
  }

  public async signOut() {
    return this.firebaseAuth.auth.signOut();
  }
}
