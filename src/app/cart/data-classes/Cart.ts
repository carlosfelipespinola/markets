import { InCartProduct } from './InCartProduct';

export class Cart {

  public products: Array<InCartProduct>;

  constructor(data?: any) {
    if (!data) {
      data = {};
    }
    this.products = Array.isArray(data.products) ? data.products : [];
  }

  public get isEmpty() {
    return this.products.length == 0;
  }

  public productsCount() {
    if(this.products.length == 0) return 0;
    return this.products
    .map((inCartProduct) => inCartProduct.quantity)
    .reduce((quantityCount , quantity) => quantityCount + quantity);
  }

  public toObject() {
    return JSON.parse(JSON.stringify(this));
  }
}