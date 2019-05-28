import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductsAtMarketPageComponent } from './buy-products-at-market-page.component';

describe('BuyProductsAtMarketPageComponent', () => {
  let component: BuyProductsAtMarketPageComponent;
  let fixture: ComponentFixture<BuyProductsAtMarketPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyProductsAtMarketPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyProductsAtMarketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
