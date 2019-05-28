export class MarketData{
  public readonly tradeName: string;
  public readonly rating: number;


  constructor(data: {tradeName?: string; rating?: string | number;}){
    this.tradeName = data.tradeName;
    this.rating = typeof data.rating == 'number' ? data.rating : parseInt(data.rating);
  }

  get hasRating(){
    return this.rating != NaN;
  }

}