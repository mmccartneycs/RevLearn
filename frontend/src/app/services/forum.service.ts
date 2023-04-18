import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from '../models/forum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpClient : HttpClient) { }
  
  getAllForumPostsById(id: number) : Observable<Forum[]> {
    let header : HttpHeaders = new HttpHeaders();
    header = header.append("accept", "application/json");
    return this.httpClient.get<Forum[]>(`http://localhost:9000/forums/${id}`, { headers : header });
  }

  postForumPost(forum: Forum): Observable<any> {
    let header: HttpHeaders = new HttpHeaders();
    header = header.append("Content-Type", "application/json");
    return this.httpClient.post("http://localhost:9000/forum", forum, { headers: header });
  }
}
