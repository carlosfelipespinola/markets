import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthModule } from '../auth/auth.module';
import {MatCardModule} from '@angular/material/card';
import { HomeRoutingModule } from './home.routing';
import { LoginFormComponentModule } from '../auth/components/login-form/login-form-component.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginFormComponentModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
  ]
})
export class HomeModule { }
