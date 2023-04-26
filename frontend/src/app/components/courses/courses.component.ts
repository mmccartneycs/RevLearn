import { Component, Input} from '@angular/core';
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

  //  This section handles the registration of the course and persists to My Courses.

   sid : number = this.accountService.accInfo.id;

   registerCourse(sid : number, cid : number) {
    this.coursesService.registerCourse(sid, cid).subscribe(json => {
      this.registeredCourse = json;
      console.log(this.registeredCourse)
    });
  }

  // This section works with the toggle button for registering for a class

  toggle = true;
  status = "Register for this course";

  registeredButton() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Register for this course" : "You are registered!";
  }
}



