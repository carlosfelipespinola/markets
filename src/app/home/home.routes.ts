import { Route, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const homeRoute: Route = {path: 'home', component: HomePageComponent};

export const homeRoutes: Routes = [
  homeRoute,
];
