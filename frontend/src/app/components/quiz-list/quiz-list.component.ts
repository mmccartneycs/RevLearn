import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  id : number = 3; //specfies the courseId. This is hard coded and need to change later.
  coursesByStudentId : any[] = [];
  quizzesByCourse: string[] = []; //this is iterated on the DOM when the component initializes. 
  selectedAnswers : string[] = []; // stores the selected answers by the student.
  quizByQuizName : any;
  percent : any = 0;
  showQuiz : boolean = false;
  showSubmit : boolean = false;
  buttonsToDisable : any[] = [];
  quiz : Quiz = { 
    quizId: 0,
    quizName: '', 
    question: '', 
    answer1: '', 
    answer2: '', 
    answer3: '', 
    answer4: '', 
    answer: ''
  };
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getQuizByCourseId(this.id).subscribe(json => {
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
    this.percent = (totalScore/length * 100).toFixed(2);
    console.log(`Student scored: ${totalScore} out of ${length} questions which equals to: ${this.percent}`);
    this.showQuiz = false;
    this.showSubmit = false;
  }

  getCoursesByStudentId(id : number) {
    this.quizService.getCoursesByStudentId(id).subscribe(json => {
      this.coursesByStudentId = json as any [];
      console.log(this.coursesByStudentId);
    })
  }
}

