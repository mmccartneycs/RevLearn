import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gradebook } from '../models/gradebook';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GradebookService {

  constructor(private httpClient: HttpClient) { }

  postGradebookEntry(gradebook: Gradebook): Observable<Gradebook[]> {
    let header: HttpHeaders = new HttpHeaders();
    header = header.append("accept", "application/json");
    return this.httpClient.post<Gradebook[]>("http://localhost:9000/gradebook", gradebook, { headers: header });
  }

  getAllGradebookById(id: number): Observable<any> {
    let header: HttpHeaders = new HttpHeaders();
    header = header.append("Content-Type", "application/json");
    return this.httpClient.get<Gradebook[]>(`http://localhost:9000/gradebooks/${id}`, { headers: header });
  }

  getCoursesByStudentId(id : number) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.httpClient.get(`http://localhost:9000/student/${id}/courses`)
  }

  getAllQuizzes(): Observable<any> {
    return this.httpClient.get<Gradebook[]>(`http://localhost:9000/quiz`);
  }
}