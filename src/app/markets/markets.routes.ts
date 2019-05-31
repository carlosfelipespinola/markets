import { Routes, Route } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MarketsComponent } from './markets.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { marketRoutesPathHierarchy } from './markets.routes.paths';



const marketHomeRoute: Route = {
  path: marketRoutesPathHierarchy.root.children.homePage.path,
  component: HomePageComponent 
}

const marketProductsRoute: Route = { 
  path: marketRoutesPathHierarchy.root.children.productsPage.path,
  component: ProductsPageComponent,
};

export const marketRoutes: Routes = [
  {
    path: marketRoutesPathHierarchy.root.path,
    component: MarketsComponent,
    children: [
      marketHomeRoute,
      marketProductsRoute
    ]
  },
];
