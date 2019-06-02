import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRegisterModeComponent } from './select-register-mode.component';

describe('SelectRegisterModeComponent', () => {
  let component: SelectRegisterModeComponent;
  let fixture: ComponentFixture<SelectRegisterModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRegisterModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRegisterModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
