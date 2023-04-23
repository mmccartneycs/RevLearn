import { Component, OnInit } from '@angular/core';
import { Gradebook } from 'src/app/models/gradebook';
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
