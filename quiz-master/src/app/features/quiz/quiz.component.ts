import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuizService } from '../../shared/services/quiz.service';
import { MarkdownComponent } from 'ngx-markdown';
import { NgClass, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [MarkdownComponent, RouterLink, DecimalPipe],
  template: `
    <div class="container mx-auto p-4 max-w-3xl">
      @if (quizService.activeQuiz(); as quiz) {
        @if (!quizService.isCompleted()) {
          <div class="mb-6 flex justify-between items-center">
            <h1 class="text-2xl font-bold">{{ quiz.title }}</h1>
            <span class="text-gray-600">
              Question {{ quizService.questionIndex() + 1 }} of {{ quiz.questions.length }}
            </span>
          </div>

          <div class="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                 [style.width.%]="quizService.progress()"></div>
          </div>

          @if (quizService.currentQuestion(); as question) {
            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 class="text-xl font-semibold mb-4">{{ question.text }}</h2>
              
              @if (question.codeSnippet) {
                <div class="mb-4">
                  <markdown [data]="getMarkdownCode(question.codeSnippet.language, question.codeSnippet.code)"></markdown>
                </div>
              }

              <div class="space-y-3">
                @for (option of question.options; track option.id) {
                  <button 
                    (click)="selectOption(question.id, option.id)"
                    class="w-full text-left p-3 rounded border transition-colors"
                    [class.bg-blue-100]="quizService.getUserAnswer(question.id) === option.id"
                    [class.border-blue-500]="quizService.getUserAnswer(question.id) === option.id"
                    [class.hover:bg-gray-50]="quizService.getUserAnswer(question.id) !== option.id"
                  >
                    {{ option.text }}
                  </button>
                }
              </div>
            </div>

            <div class="flex justify-between">
              <button 
                (click)="quizService.prevQuestion()"
                [disabled]="quizService.questionIndex() === 0"
                class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              
              <button 
                (click)="quizService.nextQuestion()"
                class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                {{ quizService.isLastQuestion() ? 'Finish Quiz' : 'Next' }}
              </button>
            </div>
          }
        } @else {
          <!-- Results View -->
          <div class="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Quiz Completed!</h2>
            
            @if (quizService.results(); as results) {
              <div class="text-6xl font-bold text-blue-600 mb-4">
                {{ results.percentage | number:'1.0-0' }}%
              </div>
              <p class="text-xl text-gray-600 mb-8">
                You got {{ results.correct }} out of {{ results.total }} questions correct.
              </p>
            }

            <div class="space-x-4">
              <a routerLink="/" class="px-6 py-2 rounded bg-gray-200 hover:bg-gray-300">
                Back to Home
              </a>
              <button (click)="quizService.resetQuiz()" class="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                Retry Quiz
              </button>
            </div>

            <!-- Review Section -->
             <div class="mt-12 text-left">
                <h3 class="text-2xl font-bold mb-6">Review</h3>
                @for (q of quiz.questions; track q.id; let i = $index) {
                    <div class="mb-6 p-4 border rounded" 
                         [class.border-green-500]="quizService.getUserAnswer(q.id) === q.correctOptionId"
                         [class.border-red-500]="quizService.getUserAnswer(q.id) !== q.correctOptionId">
                        <p class="font-semibold mb-2">
                            {{ i + 1 }}. {{ q.text }}
                            @if (quizService.getUserAnswer(q.id) === q.correctOptionId) {
                                <span class="text-green-600 ml-2">✓ Correct</span>
                            } @else {
                                <span class="text-red-600 ml-2">✗ Incorrect</span>
                            }
                        </p>
                        @if (quizService.getUserAnswer(q.id) !== q.correctOptionId) {
                            <div class="text-sm text-gray-600 mt-2">
                                <p>Your answer: {{ getOptionText(q, quizService.getUserAnswer(q.id)) }}</p>
                                <p class="font-bold text-green-700">Correct answer: {{ getOptionText(q, q.correctOptionId) }}</p>
                                @if (q.explanation) {
                                    <p class="mt-2 italic bg-gray-50 p-2 rounded">{{ q.explanation }}</p>
                                }
                            </div>
                        }
                    </div>
                }
             </div>
          </div>
        }
      } @else {
        <div class="text-center mt-10">Loading quiz...</div>
      }
    </div>
  `
})
export class QuizComponent implements OnInit {
  quizService = inject(QuizService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const filename = params.get('id');
      if (filename) {
        this.quizService.loadQuiz(filename).subscribe();
      }
    });
  }

  selectOption(questionId: string, optionId: string) {
    this.quizService.answerQuestion(questionId, optionId);
  }

  getOptionText(question: any, optionId: string) {
      return question.options.find((o: any) => o.id === optionId)?.text || 'N/A';
  }

  getMarkdownCode(language: string, code: string): string {
    return '```' + language + '\n' + code + '\n```';
  }
}
