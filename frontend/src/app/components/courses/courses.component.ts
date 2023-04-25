import { Component, Input, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses';
import { AccountService } from 'src/app/services/account.service';
import { CoursesService } from 'src/app/services/courses.service';

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
   registeredCourse : any;

   constructor(private coursesService : CoursesService, private accountService : AccountService) {}

   sid : number = this.accountService.accInfo.id;

   registerCourse(sid : number, cid : number) {
    this.coursesService.registerCourse(sid, cid).subscribe(json => {
      this.registeredCourse = json;
      console.log(this.registeredCourse)
    });
  }
  toggle = true;
  status = "Register for this Course";

  registeredButton() {
    this.toggle = !this.toggle;
    this.status = "You are registered";
  }
}



