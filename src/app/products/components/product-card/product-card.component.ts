import { Component, OnInit, Input } from '@angular/core';
import { ProductData } from '../../data-classes/product-data';

@Component({
  selector: 'app-products-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product: ProductData;

  constructor() { }

  ngOnInit() {
    if (!this.product) {
      this.product = new ProductData();
    }
  }

}
