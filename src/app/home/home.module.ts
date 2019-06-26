import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthModule } from '../auth/auth.module';
import {MatCardModule} from '@angular/material/card';
import { HomeRoutingModule } from './home.routing';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { SelectRegisterModeComponent } from './components/select-register-mode/select-register-mode.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HomePageComponent, SelectRegisterModeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }
