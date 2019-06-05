export class ProductData {

  public uid: string;
  public name: string;
  public price: number;
  public salePrice: number;
  public images: Array<string>;
  public isAvailable: boolean;


  constructor(data?: any) {
    if (!data) {
      data = {};
    }
    this.uid = data.uid || null;
    this.name = data.name || null;
    this.images = Array.isArray(data.images) ? data.images : [];
    this.price = parseFloat(data.price);
    this.salePrice = parseFloat(data.salePrice);
    this.isAvailable = data.isAvailable || false;

    if(isNaN(this.price)) {
      this.price = null;
    }
    
    if (isNaN(this.salePrice)) {
      this.salePrice = null;
    }
  }


  public toObject() {
    return JSON.parse(JSON.stringify(this));
  }

}
