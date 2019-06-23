import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAddressComponent } from './buyer-address.component';

describe('BuyerAddressComponent', () => {
  let component: BuyerAddressComponent;
  let fixture: ComponentFixture<BuyerAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
