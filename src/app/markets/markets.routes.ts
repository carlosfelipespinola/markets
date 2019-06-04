import { Routes, Route } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MarketsComponent } from './markets.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { marketRoutesPathHierarchy } from './markets.routes.paths';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { UpdateProductPageComponent } from './pages/update-product-page/update-product-page.component';
import { MarketGuard } from './services/market.guard';
import { MyBusinessPageComponent } from './pages/my-business-page/my-business-page.component';

const marketsPath = marketRoutesPathHierarchy.root.path;
const homePath = marketRoutesPathHierarchy.root.children.homePage.path;
const productPath = marketRoutesPathHierarchy.root.children.productsPage.path;
const createProductPath = marketRoutesPathHierarchy.root.children.productsPage
.children.createProductPage.path;
const updateProductPath = marketRoutesPathHierarchy.root.children.productsPage
.children.updateProductPage.path;
const myBusinessPath = marketRoutesPathHierarchy.root.children.myBusinessPage.path;

export const marketRoutes: Routes = [
  {
    path: marketsPath,
    component: MarketsComponent,
    canActivate: [MarketGuard],
    children: [
      { path: homePath, component: HomePageComponent },
      { path: productPath, component: ProductsPageComponent },
      { path: productPath + '/' + createProductPath, component: CreateProductPageComponent },
      { path: productPath + '/' + updateProductPath, component: UpdateProductPageComponent },
      { path: myBusinessPath, component: MyBusinessPageComponent }
    ]
  },
];
