import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListComponent } from './quiz-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QuizService } from 'src/app/services/quiz.service';
import { AccountService } from 'src/app/services/account.service';

describe('QuizListComponent', () => {
  let component: QuizListComponent;
  let fixture: ComponentFixture<QuizListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizListComponent ],
      imports: [HttpClientTestingModule],
      providers: [QuizService, AccountService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
