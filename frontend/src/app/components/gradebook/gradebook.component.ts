import { Component, OnInit } from '@angular/core';
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
  grade: Gradebook = {
    Id: 0,
    courseId: 0,
    teacherId: 0,
    studentId: 0,
    grades: 0,
  };
  coursesStudent: any[] = [];
  courses: any[] = [];
  selectedCourseId = 0;
  quizes: Quiz[] = [];
  write = true;
  averageGrade = 0;
  
  constructor(private gradebookService: GradebookService, private accountService: AccountService) {}

  ngOnInit(): void {
    this.gradebookService.getAllGradebookById(this.accountService.accInfo.id).subscribe(entry => {
      this.grades = entry;
      console.log(this.grades)
    });
    
    this.gradebookService.getCoursesByStudentId(this.accountService.accInfo.id).subscribe(response => {
      this.coursesStudent = response as any [];
      console.log(this.coursesStudent);
    });

    this.gradebookService.getAllQuizzes().subscribe(response => {
      this.quizes = response as any [];
      console.log("testing")
      console.log(this.quizes);
    });
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
      this.grade = {
        Id: 0,
        courseId: 0,
        teacherId: 0,
        studentId: 0,
        grades: 0,
      };
    });
  }

}