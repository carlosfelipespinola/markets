export class ProductData {

  public name: string;
  public price: number;
  public images: Array<string>;


  constructor(data?: any) {
    if (!data) {
      data = {};
    }
    this.name = data.name || null;
    this.images = Array.isArray(data.images) ? data.images : [];
    this.price = parseFloat(data.price);
  }

}
