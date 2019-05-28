import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMarketsComponent } from './list-of-markets.component';

describe('ListOfMarketsComponent', () => {
  let component: ListOfMarketsComponent;
  let fixture: ComponentFixture<ListOfMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
