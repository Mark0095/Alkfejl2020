import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMarkAddedSuccessComponent } from './teacher-mark-added-success.component';

describe('TeacherMarkAddedSuccessComponent', () => {
  let component: TeacherMarkAddedSuccessComponent;
  let fixture: ComponentFixture<TeacherMarkAddedSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMarkAddedSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMarkAddedSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
