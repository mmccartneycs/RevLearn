import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses.list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{

  courses: any;

  full_course: Courses = {
    course_id: 0,
    educator_id: 0,
    name: '',
    keywords: '',
    category: '',
    course_level: 0,
    description: '',
    cost: 0
  };

  constructor(public coursesService : CoursesService) {}

  ngOnInit(): void {
    this.refresh();
  }
  refresh() : void {
    this.coursesService.getAllCourses().subscribe(json => {this.courses =json; console.log(this.courses);});    
    
  }
  setCourse(id : number ) : void {
    this.full_course=this.courses[id];
    console.log(this.full_course);
  }

}


