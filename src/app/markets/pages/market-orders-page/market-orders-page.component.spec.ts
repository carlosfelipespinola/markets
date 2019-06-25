import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketOrdersPageComponent } from './market-orders-page.component';

describe('MarketOrdersPageComponent', () => {
  let component: MarketOrdersPageComponent;
  let fixture: ComponentFixture<MarketOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketOrdersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
