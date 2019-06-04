import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneByTwoCardComponent } from './one-by-two-card.component';

describe('OneByTwoCardComponent', () => {
  let component: OneByTwoCardComponent;
  let fixture: ComponentFixture<OneByTwoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneByTwoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneByTwoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
