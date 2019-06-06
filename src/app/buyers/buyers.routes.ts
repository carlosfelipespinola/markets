import { Route, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuyProductsAtMarketPageComponent } from './pages/buy-products-at-market-page/buy-products-at-market-page.component';
import { buyersRoutesPathHierarchy } from './buyers.routes.paths';
import { BuyerGuard } from './services/buyer.guard';

const pathHierarchy = buyersRoutesPathHierarchy;

export const buyersHomePage: Route = {
  path: pathHierarchy.root.children.findMarket.path,
  component: HomePageComponent,
  canActivate: [BuyerGuard]
};

export const buyersBuyProductAtMarketPage: Route = {
  path: pathHierarchy.root.children.buyProductsAtMarket.path,
  component: BuyProductsAtMarketPageComponent,
  canActivate: [BuyerGuard]
};

export const buyersRoutes: Routes = [
  buyersHomePage,
  buyersBuyProductAtMarketPage
]