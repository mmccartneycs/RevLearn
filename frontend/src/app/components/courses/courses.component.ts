import { Component, Input, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{
  @Input()
   course : Courses = {
     course_id: 0,
     educator_id: 0,
     name: '',
     keywords: '',
     category: '',
     course_level: 0,
     description: '',
     cost: 0
   }
 
 
 

}



