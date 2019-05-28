import { Component, OnInit } from '@angular/core';
import { APP_NAME } from 'src/app/app.consts';
import { Router } from '@angular/router';
import { buyersHomePage } from 'src/app/buyers/buyers.routes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public appName = APP_NAME;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onLogin(event){
    this.router.navigate([buyersHomePage.path]);
  }

}
