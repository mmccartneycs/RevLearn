import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ForumComponent } from './components/forum/forum.component';
import { GradebookComponent } from './components/gradebook/gradebook.component';
import { QuizComponent } from './pages/quiz/quiz.component';


const routes: Routes = [
  { path: '**', component: HomepageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'gradebook', component: GradebookComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
