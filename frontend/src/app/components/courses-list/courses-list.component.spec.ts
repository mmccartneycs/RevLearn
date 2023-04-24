import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CoursesService } from 'src/app/services/courses.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoursesComponent } from '../courses/courses.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent, CoursesComponent ],
      imports: [HttpClientTestingModule, MatToolbarModule],
      providers: [CoursesService, CoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
