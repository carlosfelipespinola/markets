export class MarketData{
  public tradeName: string;
  public rating: number;
  public uid: string;
  public email: string;


  constructor(data: any) {
    this.tradeName = data.tradeName;
    this.rating = typeof data.rating === 'number' ? data.rating : parseInt(data.rating, 10);
    this.uid = data.uid;
  }

  get hasRating() {
    return this.rating !== NaN;
  }

}