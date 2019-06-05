import { GOOGLE_SIGN_IN_BUTTON_ASSET2X, DEFAULT_LOGO, LOGO_HORIZONTAL } from './../../../app.consts';
import { Component, OnInit } from '@angular/core';
import { APP_NAME, GOOGLE_SIGN_IN_BUTTON_ASSET } from 'src/app/app.consts';
import { Router } from '@angular/router';
import { buyersHomePage, buyersRoutes } from 'src/app/buyers/buyers.routes';
import { REGISTER_AS_MARKET, REGISTER_AS_BUYER } from '../../components/select-register-mode/modes.consts';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { UserService } from 'src/app/users/services/user.service';
import { User } from 'firebase';
import { UserData, UserRoles, IUserData } from 'src/app/users/data_classes/UserData';
import { marketRoutesPathHierarchy } from 'src/app/markets/markets.routes.paths';
import { buyersHomePageRoutePath } from 'src/app/buyers/buyers.routes.paths';
import { MatSnackBar, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public appName = APP_NAME;
  public registerMode = REGISTER_AS_MARKET;
  private readonly tabsIndexes = { login: 0, register: 1 };
  public selectedTabIndex = this.tabsIndexes.login;
  public googleSignInButtonImage = GOOGLE_SIGN_IN_BUTTON_ASSET;
  public googleSignInButtonImage2x = GOOGLE_SIGN_IN_BUTTON_ASSET2X;
  public logo = LOGO_HORIZONTAL;
  constructor(
    private router: Router,
    private readonly googleAuthService: GoogleAuthService,
    private readonly userServices: UserService,
    private readonly snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public async login() {
    const credentials = await this.googleAuthService.signIn();
    const user = await this.userServices.getUserDataByUserUid(credentials.user.uid).toPromise();
    const userData = new UserData(user.data());
    if (!this.userServices.userIsRegistered(userData)) {
      this.showSnackbarMessage('Você deve se registrar primeiro para poder fazer o login');
      this.showRegisterTab();
      return;
    }
    this.navigateBasedOnUserRole(userData);
  }

  private showSnackbarMessage(message: string) {
    const milliSecondsTime = 5000;
    this.snackbar.open(message, null, {duration: milliSecondsTime});
  }

  private showRegisterTab() {
    this.selectedTabIndex = this.tabsIndexes.register;
  }

  private navigateBasedOnUserRole( user: IUserData ) {
    if (user.role === UserRoles.MARKET_OWNER_ROLE) {
      this.router.navigate([marketRoutesPathHierarchy.root.children.homePage.fullPath]);
    } else {
      this.router.navigate([buyersHomePageRoutePath]);
    }
  }

  public async registerWithGoogle() {
    const credentials = await this.googleAuthService.signIn();
    const userData = await this.registerAuthenticatedUser(credentials.user);
    this.navigateBasedOnUserRole(userData);
  }

  private async registerAuthenticatedUser(user: User): Promise<IUserData> {
    const userData = new UserData(user);
    userData.role = this.registerModeToUserRole();
    await this.userServices.updateUserData(userData);
    return userData;
  }

  private registerModeToUserRole() {
    if (this.registerMode === REGISTER_AS_MARKET) {
      return UserRoles.MARKET_OWNER_ROLE;
    } else {
      return UserRoles.BUYER_ROLE;
    }
  }

  public registerModeChange(mode: string) {
    this.registerMode = mode;
  }
}
