import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quizzesByCourse: string[] = []; //this is iterated on the DOM when the component initializes. 
  selectedAnswers : string[] = []; // stores the selected answers by the student.
  id: number = 3; //specfies the courseId. This is hard coded and need to change later.
  quizByQuizName : any;
  quizzes : any[] | undefined;
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
      this.quizByQuizName.forEach((quiz: { selectedAnswer: null; }) => {
        quiz.selectedAnswer = null;
      })
    })
  }

  myAnswer(answer:string) {
    this.selectedAnswers.push(answer);
    console.log(`Student selected: ${this.selectedAnswers}`);
  }

  getQuizById(id: number) {
    this.quizService.getQuizById(id).subscribe(json => {
      this.quiz = json as any;
    })
  // this.quizByQuizName.forEach((quiz: { points: number; }) => quiz.points = 0);
  let totalScore : number = 0;
  let points : number = 1;
  for (let i = 0; i < this.quizByQuizName.length; i++) {
    let quiz = this.quizByQuizName[i];
    console.log(`The correct answer for quizId: ${quiz.quizId} is: ${quiz.answer}`);
    console.log(`The student answered: ${this.selectedAnswers[i]}`);
    if (this.selectedAnswers[i] === quiz.answer) {
      totalScore += points;
    }
  }
  console.log(`Total score: ${totalScore}`)
  }
}

