import { Component, Input, OnInit } from '@angular/core';
import { Gradebook } from 'src/app/models/gradebook';
import { Quiz } from 'src/app/models/quiz';
import { AccountService } from 'src/app/services/account.service';
import { GradebookService } from 'src/app/services/gradebook.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  coursesByStudentId : any[] = []; //stores the student's course object.
  quizzesByCourse: string[] = []; //stores the quiz names from a course.
  selectedAnswers : string[] = []; //stores the selected answers by the student.
  quizByQuizName : any; //stores the quiz
  percent : any = 0;
  showQuiz : boolean = false;
  showSubmit : boolean = false;
  buttonsToDisable : any[] = [];
  postedGrade : any;
  grade : Gradebook = {
    studentId: this.accountService.accInfo.id,
    grades: this.percent
  }

  constructor(private quizService: QuizService, private accountService: AccountService, private gradebookService : GradebookService) {}
  
  ngOnInit() {
    this.quizService.getCoursesByStudentId(this.accountService.accInfo.id).subscribe(json => {
      this.coursesByStudentId = json as any [];
      console.log(this.coursesByStudentId);
    })
  }
     
  openMyListOfQuiz(id : number) {
    this.quizService.getQuizByCourseId(id).subscribe(json => {
      this.quizzesByCourse = json as any[];
      console.log(this.quizzesByCourse);
    });
  }

  openMyQuiz(quizName : string) : void {
    console.log(`Clicked on: ${quizName}`)
    this.quizService.getQuizByQuizName(quizName).subscribe(json => {
      this.quizByQuizName = json;
      console.log(this.quizByQuizName);
    })
    this.showQuiz = true;
    this.showSubmit = true;
  }
  
  myAnswer(index:number, answer:string) {
    this.selectedAnswers[index] = answer;
    console.log(`Student selected: ${this.selectedAnswers}`);
  }
  
  submit() {
    let totalScore : number = 0;
    let points : number = 1;
    for (let i = 0; i < this.quizByQuizName.length; i++) {
      let quiz = this.quizByQuizName[i];
      this.buttonsToDisable.push(quiz.quizName);
      console.log(`The correct answer for quizId: ${quiz.quizId} is: ${quiz.answer}`);
      console.log(`The student answered: ${this.selectedAnswers[i]}`);
      if (this.selectedAnswers[i] === quiz.answer) {
        totalScore += points;
      }
    }
    let length = this.quizByQuizName.length;
    this.percent = (totalScore/length * 100)
    this.grade.grades = this.percent
    console.log(`Student scored: ${totalScore} out of ${length} questions which equals to: ${this.percent}`);
    this.showQuiz = false;
    this.showSubmit = false;
    this.postGrade();
  }

  postGrade() {
    this.gradebookService.postGradebookEntry(this.grade).subscribe(json => {
      this.postedGrade = json;
      console.log(this.postedGrade);
    })
  }
}

