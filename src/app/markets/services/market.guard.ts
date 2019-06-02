import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { tap, map, take } from 'rxjs/operators';
import { UserRoles } from 'src/app/users/data_classes/UserData';
import { HomeNavigationService } from 'src/app/home/services/home-navigation.service';

@Injectable({
  providedIn: 'root'
})
export class MarketGuard implements CanActivate {

  constructor(
    private readonly googleAuthService: GoogleAuthService,
    private readonly homeNavigationService: HomeNavigationService
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

        return user.role === UserRoles.MARKET_OWNER_ROLE;
      }),
      tap((canAccess) => {
        if (!canAccess) {
          this.homeNavigationService.navigateToHomePage();
        }
      })
    );
  }
}
