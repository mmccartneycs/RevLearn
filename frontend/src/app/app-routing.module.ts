import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ForumComponent } from './components/forum/forum.component';
import { GradebookComponent } from './components/gradebook/gradebook.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';


const routes: Routes = [
  { path: '**', component: HomepageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'catalog', component: CoursesListComponent },
  { path: 'course-selection', component: CoursesComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'gradebook', component: GradebookComponent },
  { path: 'mycourses', component: QuizListComponent },
  { path: 'account', component: AccountSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
