import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAdditionComponent } from './teacher-addition.component';

describe('TeacherAdditionComponent', () => {
  let component: TeacherAdditionComponent;
  let fixture: ComponentFixture<TeacherAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
