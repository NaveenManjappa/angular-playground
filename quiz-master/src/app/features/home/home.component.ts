import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuizService } from '../../shared/services/quiz.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6">Available Quizzes</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        @for (quiz of quizService.quizzes(); track quiz.id) {
          <div class="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer bg-white">
            <h2 class="text-xl font-semibold mb-2">{{ quiz.title }}</h2>
            <p class="text-gray-600 mb-4">{{ quiz.description }}</p>
            <a [routerLink]="['/quiz', quiz.filename]" 
               class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start Quiz
            </a>
          </div>
        }
      </div>
      
      <div class="mt-8 border-t pt-4">
        <h2 class="text-2xl font-bold mb-4">Admin</h2>
        <a routerLink="/admin" class="text-blue-600 hover:underline">Create New Quiz</a>
      </div>
    </div>
  `
})
export class HomeComponent {
  quizService = inject(QuizService);
}
