import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyersHomePageBottomSheetComponent } from './buyers-home-page-bottom-sheet.component';

describe('BuyersHomePageBottomSheetComponent', () => {
  let component: BuyersHomePageBottomSheetComponent;
  let fixture: ComponentFixture<BuyersHomePageBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyersHomePageBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyersHomePageBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
