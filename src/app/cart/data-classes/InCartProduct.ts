import { ProductData } from './../../products/data-classes/product-data';


export class InCartProduct {
  public product: ProductData;
  public quantity: number;

  constructor (product: ProductData) {
    this.quantity = 1;
    this.product = product;
  }
}