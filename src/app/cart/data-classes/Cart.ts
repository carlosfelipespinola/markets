import { InCartProduct } from './InCartProduct';

export class Cart {

  public products: Array<InCartProduct>;

  constructor(data?: any) {
    if (!data) {
      data = {};
    }
    this.products = Array.isArray(data.products) ? data.products : [];
  }

  public productsCount() {
    return this.products
    .map((inCartProduct) => inCartProduct.quantity)
    .reduce((quantityCount , quantity) => quantityCount + quantity);
  }

  public toObject() {
    return JSON.parse(JSON.stringify(this));
  }
}