import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOfMarketsComponent } from './grid-of-markets.component';

describe('GridOfMarketsComponent', () => {
  let component: GridOfMarketsComponent;
  let fixture: ComponentFixture<GridOfMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridOfMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOfMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
