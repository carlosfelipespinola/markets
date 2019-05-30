import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOfProductCardsComponent } from './grid-of-product-cards.component';

describe('GridOfProductCardsComponent', () => {
  let component: GridOfProductCardsComponent;
  let fixture: ComponentFixture<GridOfProductCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOfProductCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOfProductCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
