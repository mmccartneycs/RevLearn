import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { ForumComponent } from './components/forum/forum.component';
import { GradebookComponent } from './components/gradebook/gradebook.component';

// Components
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  { path: '**', component: HomepageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'gradebook', component: GradebookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
