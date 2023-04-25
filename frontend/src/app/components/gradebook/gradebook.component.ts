import { Component, NgModule, OnInit } from '@angular/core';
import { Gradebook } from 'src/app/models/gradebook';
import { Quiz } from 'src/app/models/quiz';
import { AccountService } from 'src/app/services/account.service';
import { GradebookService } from 'src/app/services/gradebook.service';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {
  
  grades: Gradebook[] = [];
  grade: Gradebook;
  coursesStudent: any[] = [];
  courses: any[] = [];
  selectedCourseId = 1;
  quizes: Quiz[] = [];
  
  constructor(private gradebookService: GradebookService, private accountService : AccountService) {
    this.grade = {
      Id: 0,
      teacherId: 0,
      studentId: 0,
      grades: 0,
    };
   }

  ngOnInit(): void {
    this.gradebookService.getAllGradebookById(this.accountService.accInfo.id).subscribe(entry => {
      this.grades = entry;
      console.log(this.grades)
    });
    this.grade = new Gradebook();

      this.gradebookService.getCoursesByStudentId(this.accountService.accInfo.id).subscribe(response => {
      this.coursesStudent = response as any [];
      console.log(this.coursesStudent);
    })

    this.gradebookService.getAllQuizzes().subscribe(response => {
      this.quizes = response as any [];
      console.log("testing")
      console.log(this.quizes);
    })

  }
  
  showGrades(): void {
    this.gradebookService.getAllGradebookById(this.accountService.accInfo.id).subscribe(entry => {
      this.grades = entry;
      console.log(this.grades)
    });
  }

  addPost(): void {
    this.gradebookService.postGradebookEntry(this.grade).subscribe(response => {
      console.log(response);
      this.gradebookService.getAllGradebookById(1).subscribe(entry => {
        this.grades = entry;
      });
      this.grade = new Gradebook();
    });
  }


}