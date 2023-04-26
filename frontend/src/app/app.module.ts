import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ngx-bootstrap/rating';

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
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxEditorModule } from 'ngx-editor';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RatingComponent } from './components/rating/rating.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


const routes: Routes = [

  { path: '', component: HomepageComponent },
  { path: 'catalog', component: CoursesListComponent },
  { path: 'course-selection', component: CoursesComponent },
  { path: 'gradebook', component: GradebookComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'mycourses', component: QuizListComponent },
  { path: 'account', component: AccountSettingsComponent },
  { path: '**', component: HomepageComponent }]


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
    AccountSettingsComponent,
    RatingComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    [NgxEditorModule],
    NgxEditorModule,

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
    MatNativeDateModule,
    MatTooltipModule,
    MatListModule,
    RatingModule.forRoot(),
    MatListModule,
    MatButtonToggleModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
