import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Router 
import { RouterModule, Routes } from '@angular/router';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { GradebookComponent } from './components/gradebook/gradebook.component';
import { ForumComponent } from './components/forum/forum.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';


// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'course-selection', component: CoursesComponent },
  { path: 'gradebook', component: GradebookComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'quiz', component: QuizListComponent },
  { path: 'account', component: AccountSettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    HomepageComponent,
    NavbarComponent,
    CoursesComponent,
    GradebookComponent,
    ForumComponent,
    CoursesListComponent,
    QuizComponent,
    AccountSettingsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,


    // Angular Material Imports
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
