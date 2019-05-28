export class MarketFilterData{
  public query: string;

  constructor(data?: {query?: string;}){
    if(!data) data = {};
    this.query = data.query || null;
  }

}