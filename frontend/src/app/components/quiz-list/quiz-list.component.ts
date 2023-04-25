import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses';
import { Gradebook } from 'src/app/models/gradebook';
import { AccountService } from 'src/app/services/account.service';
import { CoursesService } from 'src/app/services/courses.service';
import { GradebookService } from 'src/app/services/gradebook.service';
import { QuizService } from 'src/app/services/quiz.service';
import sweetalert from 'sweetalert';


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
  timeRemaining: number = 15;
  intervalId : any = null;
  grade : Gradebook = {
    studentId: this.accountService.accInfo.id,
    quizName: '',
    grades: this.percent
  }

  full_course: any;

  constructor(private quizService: QuizService, private accountService: AccountService, private gradebookService : GradebookService, private courseService: CoursesService) {}
  
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
    clearInterval(this.intervalId);
    this.timeRemaining = 15;
    let totalScore : number = 0;
    let points : number = 1;
    for (let i = 0; i < this.quizByQuizName.length; i++) {
      let quiz = this.quizByQuizName[i];
      this.buttonsToDisable.push(quiz.quizName);
      this.grade.quizName = quiz.quizName; //this sets the quizname to be pushed into the gradebook. 
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
    sweetalert("Your grade has been posted!")
    console.log(`The grade object's grade: ${this.grade.grades}`)
    console.log(`The grade object's student Id: ${this.grade.studentId}`)
  }

  postGrade() {
    this.gradebookService.postGradebookEntry(this.grade).subscribe(json => {
      this.postedGrade = json;
      console.log(this.postedGrade);
    })
  }

  timer() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
      this.intervalId = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining === 0) {
        clearInterval(this.intervalId);
        sweetalert("Time's up!");
        this.submit();
        this.timeRemaining = 15;
      }
    }, 1000);
  }
  
  dropMyCourse(sid : number, cid : number) {
    this.courseService.dropCourse(sid, cid).subscribe(json => { this.full_course = json; 
    });
  }
}

