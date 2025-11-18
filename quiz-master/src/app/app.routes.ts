import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { QuizComponent } from './features/quiz/quiz.component';
import { AdminComponent } from './features/admin/admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz/:id', component: QuizComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' }
];
