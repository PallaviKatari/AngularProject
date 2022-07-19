import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactCourseComponent } from './react-course.component';

describe('ReactCourseComponent', () => {
  let component: ReactCourseComponent;
  let fixture: ComponentFixture<ReactCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
