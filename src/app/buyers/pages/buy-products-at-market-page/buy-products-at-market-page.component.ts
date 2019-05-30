import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Inject } from '@angular/core';
import { MarketData } from 'src/app/markets/data_classes/MarketData';
import { ProductData } from 'src/app/products/data-classes/product-data';
import { HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-buy-products-at-market-page',
  templateUrl: './buy-products-at-market-page.component.html',
  styleUrls: ['./buy-products-at-market-page.component.scss']
})
export class BuyProductsAtMarketPageComponent implements OnInit, OnDestroy {

  public products: Array<ProductData> = [
    new ProductData({name: "Coca cola 2 litros", price: "7.50", images: ["https://static.carrefour.com.br/medias/sys_master/images/images/hab/h59/h00/h00/9494639018014.jpg"]}),
    new ProductData({name: "Dirtos 70g", price: "5.00", images: ["https://static.carrefour.com.br/medias/sys_master/images/images/h75/hab/h00/h00/12209269833758.jpg"]}),
    new ProductData({name: "Nissin miojo legumes 200g", price: "1.99", images: ["https://www.paodeacucar.com/img/uploads/1/774/604774.png?type=product"]}),
    new ProductData({name: "Biscoito Oreo Original 144g - Mondelez", price: "9.99", images: ["https://images-americanas.b2w.io/produtos/01/00/item/19549/3/19549316_1GG.jpg"]}),
    new ProductData({name: "Pizza Sadia Frango com Catupiry e Mussarela", price: "17.00", images: ["https://www.paodeacucar.com/img/uploads/1/862/540862.jpg?type=product"]}),
    new ProductData({name: "Guraná Antartica Lata", price: "2.99", images: ["https://static.carrefour.com.br/medias/sys_master/images/images/h49/he7/h00/h00/9295715598366.jpg"]}),
  ];
  public market: MarketData;
  public searchingMode = false;
  public searchProductString: string = null;
  @ViewChild('searchInput')
  public searchInput: ElementRef<HTMLInputElement>;
  private defaultBodyOverflowStyle = null;

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.defaultBodyOverflowStyle = this.document.body.style.overflow;
    this.market = new MarketData({tradeName: 'Supermercado criméia'});
  }

  ngOnDestroy() {
    this.document.body.style.overflow = this.defaultBodyOverflowStyle;
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.setSearchingMode(false);
  }

  public setSearchingMode(value: boolean) {
    this.searchingMode = value;
    const shouldHideBodyOverflow = this.searchingMode;
    this.setBodyOverflowHidden(shouldHideBodyOverflow);
  }

  private setBodyOverflowHidden(value: boolean) {
    this.document.body.style.overflow = value === true ? 'hidden' : this.defaultBodyOverflowStyle;
  }

  public clearSearchProductString(e: any) {
    this.searchProductString = '';
    this.searchInput.nativeElement.focus();
  }
}
