import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketOrderPageComponent } from './market-order-page.component';

describe('MarketOrderPageComponent', () => {
  let component: MarketOrderPageComponent;
  let fixture: ComponentFixture<MarketOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
