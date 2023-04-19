import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

    @Input()
    quizzes: any[] = [];

    answer : string = "";
    quiz : any;
    count : number = 0;
    correctAnswer : any;
    quizId : any;
    show : boolean = true
  
    constructor(public quizService : QuizService) {
    }
  
    ngOnInit(): void {
    }
  
    getAllQuizzes() {
      this.quizService.getAllQuizzes().subscribe(json => {
        this.quizzes = json as any[];
        console.log(this.quizzes);
      })
    }
  
    getQuizById(id: number) {
      this.quizService.getQuizById(id).subscribe(json => {
        this.quiz = json;
        this.correctAnswer = this.quiz.answer;
        this.quizId = this.quiz.quizId;
  
        console.log(`QuizId is: ${this.quiz.quizId}`);
        console.log(`The Correct Answer is: ${this.correctAnswer}`);
        console.log(`The Student's Answer is: ${this.answer[this.quizId]}`);
  
        if (this.correctAnswer == this.answer[this.quizId]) {
          this.count = this.count + 1;
        }
      })
    }
  
    myAnswer(ans: any) {
      this.answer = ans;
    }
}
