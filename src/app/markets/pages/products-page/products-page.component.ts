import { Component, OnInit } from '@angular/core';
import { marketRoutesPathHierarchy } from '../../markets.routes.paths';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  public createProductRoute = {
    url: marketRoutesPathHierarchy.root.children.productsPage.children.createProductPage.fullPath,
    name: marketRoutesPathHierarchy.root.children.productsPage.children.createProductPage.name
  };
  constructor() { }

  ngOnInit() {
  }

}
