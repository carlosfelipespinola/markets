import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusinessPageComponent } from './my-business-page.component';

describe('MyBusinessPageComponent', () => {
  let component: MyBusinessPageComponent;
  let fixture: ComponentFixture<MyBusinessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBusinessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBusinessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
