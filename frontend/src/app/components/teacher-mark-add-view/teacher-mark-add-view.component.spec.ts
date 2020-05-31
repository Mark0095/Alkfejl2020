import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherMarkAddViewComponent } from './teacher-mark-add-view.component';

describe('TeacherMarkAddViewComponent', () => {
  let component: TeacherMarkAddViewComponent;
  let fixture: ComponentFixture<TeacherMarkAddViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherMarkAddViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherMarkAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
