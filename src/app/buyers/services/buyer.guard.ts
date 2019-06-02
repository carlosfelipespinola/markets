import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { UserService } from 'src/app/users/services/user.service';
import { tap, map, take } from 'rxjs/operators';
import { UserRoles } from 'src/app/users/data_classes/UserData';
import { HomeNavigationService } from 'src/app/home/services/home-navigation.service';

@Injectable({
  providedIn: 'root'
})
export class BuyerGuard implements CanActivate {
  constructor(
    private readonly googleAuthService: GoogleAuthService,
    private readonly homeNavigation: HomeNavigationService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.googleAuthService.authenticatedUser.pipe(
      take(1),
      map ((user) => {
        if ( user == null ) {
          return false;
        }
        return user.role === UserRoles.BUYER_ROLE;
      }),
      tap((canAccess) => {
        if (!canAccess) {
          this.homeNavigation.navigateToHomePage();
        }
      })
    );
  }
}
