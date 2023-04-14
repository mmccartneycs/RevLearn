import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes? : Quiz[];
  constructor(private httpClient : HttpClient) { }
  
}
