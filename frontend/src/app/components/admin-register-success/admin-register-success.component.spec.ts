import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterSuccessComponent } from './admin-register-success.component';

describe('AdminRegisterSuccessComponent', () => {
  let component: AdminRegisterSuccessComponent;
  let fixture: ComponentFixture<AdminRegisterSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegisterSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
