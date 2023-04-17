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
 

  constructor(public coursesService : CoursesService) {}

  ngOnInit(): void {
    this.refresh();
  }
  refresh() : void {
    this.coursesService.getAllCourses().subscribe(json => {this.courses =json; console.log(this.courses);}); 
    
    
  }

}

//Being used to view a list of all courses
//Eventually in a view to be able to filter through the list for specific courses through the use of a search bar. 
