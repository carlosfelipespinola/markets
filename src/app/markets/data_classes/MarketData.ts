//@ts-check

interface IAddress {
  country: string;
  state: string;
  city: string;
  zipCode: string;
  address: string;
  addOnAdress: string;
}

class Address implements IAddress {
  public country: string;
  public state: string;
  public city: string;
  public zipCode: string;
  public address: string;
  public addOnAdress: string;

  constructor(data?: IAddress | any) {

    if (!data) {
      data = {};
    }
    this.country = data.country || null;
    this.state = data.state || null;
    this.city = data.city || null;
    this.zipCode = data.zipCode || null;
    this.address = data.address || null;
    this.addOnAdress = data.addOnAdress || null;
  }

}

export interface IMarketData {
  companyName: string;
  tradeName: string;
  companyNumberId: string;
  address: Address;
  rating: number;
}

export class MarketData implements IMarketData {

  public companyName: string;
  public tradeName: string;
  public companyNumberId: string;
  public address: Address;
  public rating: number;
  public uid: string;

  constructor(data?: IMarketData | any) {

    if (!data) {
      data = {};
    }

    this.companyName = data.companyName || null;
    this.tradeName = data.tradeName || null;
    this.companyNumberId = data.companyNumberId || null;
    this.address = new Address(data.address);
    this.rating = typeof data.rating === 'number' ? data.rating : parseInt(data.rating, 10);
  }

  get hasRating() {
    return this.rating !== NaN;
  }

  toObject() {
    return {
      companyName: this.companyName,
      tradeName: this.tradeName,
      companyNumberId: this.companyNumberId,
      rating: this.rating,
      address: {
        country: this.address.country,
        state: this.address.state,
        city: this.address.city,
        zipCode: this.address.zipCode,
        address: this.address.address,
        addOnAdress: this.address.addOnAdress
      }  
    }
  }

}