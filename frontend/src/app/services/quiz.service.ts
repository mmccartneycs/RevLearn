import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private httpClient : HttpClient) { }
  
  quizzes? : Quiz[];
  ev = "http://localhost:9000"

  getAllQuizzes() {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get(`${this.ev}/quiz`, { headers : header });
  }

  getQuizById(id : number) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get(`${this.ev}/quiz/${id}`, { headers : header });
  }
  
  getQuizByCourseId(id : number) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get(`${this.ev}/courses/${id}/quiz`, { headers : header });
  }

  getQuizByQuizName(quizName : string) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get(`${this.ev}/quizByName/${quizName}`)
  }
}
