import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMarketsComponent } from './filter-markets.component';

describe('FilterMarketsComponent', () => {
  let component: FilterMarketsComponent;
  let fixture: ComponentFixture<FilterMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
