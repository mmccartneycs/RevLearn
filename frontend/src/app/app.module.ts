import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './components/homepage/homepage.component';

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
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { GradebookComponent } from './components/gradebook/gradebook.component';
import { ForumComponent } from './components/forum/forum.component';

>>>>>>> 1f7b588972b74183151dd966529f654675257842

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    QuizComponent,
    QuizListComponent
=======
    HomepageComponent,
    NavbarComponent,
    CoursesComponent,
    GradebookComponent,
    ForumComponent
>>>>>>> 1f7b588972b74183151dd966529f654675257842
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    BrowserAnimationsModule,

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
    MatTabsModule
>>>>>>> 1f7b588972b74183151dd966529f654675257842
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
