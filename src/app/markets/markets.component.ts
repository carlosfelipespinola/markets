import { Component, OnInit } from '@angular/core';
import { marketRoutesPathHierarchy } from './markets.routes.paths';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {

  public routeUrls = [];

  constructor() {
    for (const key in marketRoutesPathHierarchy.root.children) {
      if (marketRoutesPathHierarchy.root.children.hasOwnProperty(key)) {
        const element = marketRoutesPathHierarchy.root.children[key];
        this.routeUrls.push({url: element.fullPath, name: element.name});
      }
    }
    
  }

  ngOnInit() {
  }

}
