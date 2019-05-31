
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { marketRoutes } from './markets.routes';

@NgModule({
  imports: [RouterModule.forChild(marketRoutes)],
  exports: [RouterModule]
})
export class MarketsRoutingModule{}
