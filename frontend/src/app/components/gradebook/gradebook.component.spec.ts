import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradebookComponent } from './gradebook.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GradebookService } from 'src/app/services/gradebook.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AccountService } from 'src/app/services/account.service';

describe('GradebookComponent', () => {
  let component: GradebookComponent;
  let fixture: ComponentFixture<GradebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradebookComponent ],
      imports: [HttpClientTestingModule, MatToolbarModule],
      providers: [GradebookService, AccountService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
