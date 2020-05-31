import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPanelViewComponent } from './teacher-panel-view.component';

describe('TeacherPanelViewComponent', () => {
  let component: TeacherPanelViewComponent;
  let fixture: ComponentFixture<TeacherPanelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPanelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
