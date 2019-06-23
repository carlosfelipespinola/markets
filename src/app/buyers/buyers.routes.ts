import { Route, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuyProductsAtMarketPageComponent } from './pages/buy-products-at-market-page/buy-products-at-market-page.component';
import { buyersRoutesPathHierarchy } from './buyers.routes.paths';
import { BuyerGuard } from './services/buyer.guard';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ViewOrderComponent } from './pages/view-order/view-order.component';
import { BuyerOrdersComponent } from './pages/buyer-orders/buyer-orders.component';

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

export const buyersCheckoutPage: Route = {
  path: pathHierarchy.root.children.checkout.path,
  component: CheckoutPageComponent,
  canActivate: [BuyerGuard]
}

export const buyerOrderPage: Route = {
  path: pathHierarchy.root.children.order.path,
  component: ViewOrderComponent,
  canActivate: [BuyerGuard]
}

export const buyerOrdersPage: Route = {
  path: pathHierarchy.root.children.orders.path,
  component: BuyerOrdersComponent,
  canActivate: [BuyerGuard]
}

export const buyersRoutes: Routes = [
  buyersHomePage,
  buyersBuyProductAtMarketPage,
  buyersCheckoutPage,
  buyerOrderPage,
  buyerOrdersPage
]