import { Route, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuyProductsAtMarketPageComponent } from './pages/buy-products-at-market-page/buy-products-at-market-page.component';
import { buyersHomePageRoutePath, buyersBuyProductAtMarketPageRoutePath } from './buyers.routes.paths';
import { BuyerGuard } from './services/buyer.guard';


export const buyersHomePage: Route = {
  path: buyersHomePageRoutePath,
  component: HomePageComponent,
  canActivate: [BuyerGuard]
};

export const buyersBuyProductAtMarketPage: Route = {
  path: buyersBuyProductAtMarketPageRoutePath,
  component: BuyProductsAtMarketPageComponent,
  canActivate: [BuyerGuard]
};

export const buyersRoutes: Routes = [
  buyersHomePage,
  buyersBuyProductAtMarketPage
]