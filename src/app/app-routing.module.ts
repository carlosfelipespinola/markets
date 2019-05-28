import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { homeRoute } from './home/home.routes';

@NgModule({
  imports: [RouterModule.forRoot([{path: '', redirectTo: homeRoute.path, pathMatch: 'full'}])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
