import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Courses } from '../models/courses';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private HttpClient : HttpClient) { }

  courses : Courses[] = [];
  ev = "http://localhost:9000";

  getAllCourses() {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.HttpClient.get(`${this.ev}/courses/all`, { headers : header });
  }

  addCourses() {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.HttpClient.post(`${this.ev}/courses/add`, this.courses , {headers : header}); // why am I requried to use 'this.courses'? 
  }

  deleteCourses(id : number) {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.HttpClient.delete(`${this.ev}/courses/delete/${id}`, {headers : header}); 
  }

  updateCourses() {
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.HttpClient.put(`${this.ev}/courses/update`, this.courses, {headers : header});
  }

  getCourseById(id : number){
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.HttpClient.get(`${this.ev}/courses/delete/${id}`, {headers : header}); 
  }

  // have not put the 'findById' in here yet as we may be making customer queries for finding courses by name, keyworks, departments, or instructors. 
}
