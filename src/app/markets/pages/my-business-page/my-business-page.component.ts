import { MarketData, MarketStatus } from 'src/app/markets/data_classes/MarketData';
import { Component, OnInit } from '@angular/core';
import { BusinessDetailService } from '../../services/business-detail.service';

@Component({
  selector: 'app-my-business-page',
  templateUrl: './my-business-page.component.html',
  styleUrls: ['./my-business-page.component.scss']
})
export class MyBusinessPageComponent implements OnInit {

  status = [
    {value: MarketStatus.opened, viewValue: 'Aberto'},
    {value: MarketStatus.closed, viewValue: 'Fechado'},
  ];

  public myBusiness: MarketData = new MarketData();

  constructor(private businessDetailService: BusinessDetailService) { }

  ngOnInit() {
    this.businessDetailService.getData().subscribe((marketData) => {
      this.myBusiness = marketData;
    });
  }

  public formSubmmited() {
    this.businessDetailService.updateData(this.myBusiness);
  }
}
