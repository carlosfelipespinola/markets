import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { buyersRoutes } from './buyers.routes';

@NgModule({
  imports: [RouterModule.forChild(buyersRoutes)],
  exports: [RouterModule]
})
export class BuyersRoutingModule{}