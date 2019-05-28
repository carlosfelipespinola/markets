import { Route, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const buyersHomePage: Route = {path: 'buyers/find-market', component: HomePageComponent}

export const buyersRoutes: Routes = [
  buyersHomePage
]