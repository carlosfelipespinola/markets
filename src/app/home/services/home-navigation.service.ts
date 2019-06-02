import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { homeRoute } from '../home.routes';

@Injectable({
  providedIn: 'root'
})
export class HomeNavigationService {

  constructor(private readonly router: Router) { }

  public navigateToHomePage() {
    this.router.navigate([homeRoute.path]);
  }
}
