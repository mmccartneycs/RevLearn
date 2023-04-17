import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit{

  quizzes : any = [];
  answer : string = "";
  quiz : any;

  constructor(public quizService : QuizService) {
  }

  ngOnInit(): void {
    this.getAllQuizzes;
  }

  getAllQuizzes() {
    this.quizService.getAllQuizzes().subscribe(json => {
      this.quizzes = json;
      console.log(this.quizzes);
    })
  }

  getQuizById(id: number) {
    this.quizService.getQuizById(id).subscribe(json => {
      this.quiz = json;
      console.log(this.quiz);
    })
  }

  myAnswer(ans: any) {
    console.log(ans);
    this.answer = ans;
  }
}
