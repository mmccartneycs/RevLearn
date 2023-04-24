import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { QuizService } from './quiz.service';

describe('QuizService', () => {
  let service: QuizService;
  let http: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuizService]
    });
    service = TestBed.inject(QuizService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //mock responses returned by quizService
  const mockQuizzes = [
    {quizId: 1, quizName: 'Math Quiz 1'},
    {quizId: 2, quizName: 'Science Quiz 2'}
  ];
  const mockCourses = [
    {courseId: 1, courseName: 'Math 101', mockQuizzes},
    {courseId: 2, courseName: 'Science 102', mockQuizzes}
  ];
  const mockStudent = [
    {studentId: 1, studentName: 'John', mockCourses},
    {studentId: 2, studentName: 'Jane', mockCourses}
  ]

  // subscribe to the Observable returned by quizService and expect function is used to 
  // compare the actual response with the expected response.
  it('get courses by student id', () => {
    service.getCoursesByStudentId(mockStudent[1].studentId).subscribe(json => {
      expect(json).toEqual(mockCourses);
    });
    // http.expectOne function is used to expect an HTTP request with endpoint and req.flush function
    // is used to return a mock response for that Request.
    const req = http.expectOne(`${service.ev}/student/${mockStudent[1].studentId}/courses`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  it('get quiz by quiz id', () => {
    service.getQuizByCourseId(mockCourses[1].courseId).subscribe(json => {
      expect(json).toEqual(mockQuizzes);
    });
    const req = http.expectOne(`${service.ev}/courses/${mockCourses[1].courseId}/quiz`);
    expect(req.request.method).toBe('GET');
    req.flush(mockQuizzes);
  });

  it('get quiz by quiz name', () => {

  });
});
