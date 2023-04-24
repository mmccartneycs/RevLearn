import { TestBed } from '@angular/core/testing';

import { GradebookService } from './gradebook.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GradebookService', () => {
  let service: GradebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GradebookService]
    });
    service = TestBed.inject(GradebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all grades by student id', () => {

  });

  it('post grades', () => {
    
  })
});
