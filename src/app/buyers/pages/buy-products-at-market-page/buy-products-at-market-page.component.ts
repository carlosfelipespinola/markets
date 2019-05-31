import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Inject, AfterViewInit } from '@angular/core';
import { MarketData } from 'src/app/markets/data_classes/MarketData';
import { ProductData } from 'src/app/products/data-classes/product-data';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-buy-products-at-market-page',
  templateUrl: './buy-products-at-market-page.component.html',
  styleUrls: ['./buy-products-at-market-page.component.scss']
})
export class BuyProductsAtMarketPageComponent implements OnInit, OnDestroy, AfterViewInit {

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
  public availableCategories: Array<{name: string, selected: boolean, getColor: () => string}> = [
    {name: 'Todos os itens', selected: true, getColor: () => 'primary' },
    {name: 'Bebidas', selected: false, getColor: () => 'primary'},
    {name: 'Comidas', selected: false, getColor: () => 'accent'},
    {name: 'Limpeza', selected: false, getColor: () => 'accent'},
  ];
  public currentLayout: 'mobile' | 'web' = 'mobile';

  constructor(@Inject(DOCUMENT) private document: any, breakPointObserver: BreakpointObserver) {
    breakPointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset]).subscribe((result) => {
      if(result.matches) {
        this.currentLayout = 'mobile';
      } else {
        this.currentLayout = 'web';
      }
    });
  }

  ngOnInit() {
    this.market = new MarketData({tradeName: 'Supermercado criméia'});
  }

  ngAfterViewInit() {
    this.defaultBodyOverflowStyle = this.document.body.style.overflow;
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

  public setSelectedCategory(category: any) {
    this.availableCategories.forEach((candicateCategory) => {
      if (candicateCategory.name === category.name ) {
        candicateCategory.selected = true;
      } else {
        candicateCategory.selected = false;
      }
    });
  }

  get selectedCategory() {
    return this.availableCategories.find(x => x.selected === true);
  }
}
