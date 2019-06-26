import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ProductCategory } from './../../../products/data-classes/product-data';
import { CartService } from './../../../cart/services/cart.service';
import { ProductService } from 'src/app/products/services/product.service';
import { MarketService } from './../../../markets/services/market.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Inject, AfterViewInit } from '@angular/core';
import { MarketData } from 'src/app/markets/data_classes/MarketData';
import { ProductData } from 'src/app/products/data-classes/product-data';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { GoogleAuthService } from 'src/app/auth/services/google-auth.service';
import { HomeNavigationService } from 'src/app/home/services/home-navigation.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { Cart } from 'src/app/cart/data-classes/Cart';
import { InCartProduct } from 'src/app/cart/data-classes/InCartProduct';

@Component({
  selector: 'app-buy-products-at-market-page',
  templateUrl: './buy-products-at-market-page.component.html',
  styleUrls: ['./buy-products-at-market-page.component.scss']
})
export class BuyProductsAtMarketPageComponent implements OnInit, OnDestroy, AfterViewInit {

  public cart: Cart;
  private useruid: string;
  public products: Array<ProductData> = [];
  public productsFilteredByCategory: Array<ProductData> = [];
  public productsFilteredBySearch: Array<ProductData> = [];
  public market: MarketData;
  public searchingMode = false;
  private _searchProductString: string = null;
  set searchProductString(value: string) {
    this._searchProductString = value;
    this.productsFilteredBySearch = this.products.filter((product) => {
      if(product.name.toLowerCase().includes(this.searchProductString.toLowerCase())){
        return product;
      }
    })
  }
  get searchProductString() {
    return this._searchProductString;
  }
  @ViewChild('searchInput')
  public searchInput: ElementRef<HTMLInputElement>;
  private defaultBodyOverflowStyle = null;
  public availableCategories: Array<{name: string, selected: boolean, value: number}> = [
    {name: 'Todos os itens', selected: true, value: ProductCategory.any},
    {name: 'Bebidas', selected: false, value: ProductCategory.drinks},
    {name: 'Comidas', selected: false, value: ProductCategory.foods},
    {name: 'Lanches', selected: false, value: ProductCategory.snacks},
  ];
  public currentLayout: 'mobile' | 'web' = 'mobile';

  constructor(
    @Inject(DOCUMENT) private document: any,
    breakPointObserver: BreakpointObserver,
    private googleAuthService: GoogleAuthService,
    private homeNavigationService: HomeNavigationService,
    private marketService: MarketService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    public buyersNavigationService: NavigationService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {
    breakPointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset]).subscribe((result) => {
      if(result.matches) {
        this.currentLayout = 'mobile';
      } else {
        this.currentLayout = 'web';
      }
    });
    this.market = new MarketData();
    this.cart = new Cart();
  }

  ngOnInit() {
    const marketUid = this.activatedRoute.snapshot.params.market;
    this.marketService.getMarketById(marketUid).subscribe((market) => {
      this.market = market;
      this.productService.getProducts(this.market.uid).subscribe((products) => {
        this.products = products;
        this.productsFilteredByCategory = products;
        this.productsFilteredBySearch = products;
      })
    });
    this.googleAuthService.authenticatedUser.subscribe((user) => {
      this.useruid = user.uid;
      this.cartService.getCart({userid: user.uid, marketid: marketUid}).subscribe((cart) => {
        this.cart = cart;
        this.cart.cartId = {userid: user.uid, marketid: marketUid};
      })
    })
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
    this.availableCategories.forEach((candidateCategory) => {
      if (candidateCategory.name === category.name ) {
        candidateCategory.selected = true;
      } else {
        candidateCategory.selected = false;
      }
    });
    this.filterProductsByCategory();
  }

  private filterProductsByCategory() {
    if (this.selectedCategory.value === ProductCategory.any) {
      this.productsFilteredByCategory = this.products;
      return;
    }
    this.productsFilteredByCategory = this.products.filter((product) => product.category === this.selectedCategory.value);
  }

  get selectedCategory() {
    return this.availableCategories.find(x => x.selected === true);
  }

  public async logOut() {
    await this.googleAuthService.signOut();
    this.homeNavigationService.navigateToHomePage();
  }

  public async addProductToCart(product: ProductData) {
    if (!this.useruid || !this.market.uid) {
      console.error('Error addProductToCart line 142 of buy-products-at-market-page');
      //TODO show error
      return;
    }
    this.cart.products.push(new InCartProduct(product));
    await this.cartService.updateCart(this.cart, {userid: this.useruid, marketid: this.market.uid});
  }

  public async addProductToCartAndShowMessage(product: ProductData) {
    await this.addProductToCart(product);
    this.snackBar.open('Produto adicionado ao carrinho com sucesso', null, {duration: 3000});
  }

  public async removeProductFromCart(product: ProductData) {
    if (!this.useruid || !this.market.uid) {
      console.error('Error addProductToCart line 154 of buy-products-at-market-page');
      //TODO show error
      return;
    }
    this.cart.products = this.cart.products.filter((inCartProduct) => inCartProduct.product.uid !== product.uid);
    await this.cartService.updateCart(this.cart, {userid: this.useruid, marketid: this.market.uid});
  }
}
