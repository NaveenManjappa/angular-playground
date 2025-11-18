import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz, QuizManifest } from '../models/quiz.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private http = inject(HttpClient);

  // State
  private quizList = signal<QuizManifest[]>([]);
  private currentQuiz = signal<Quiz | null>(null);
  private currentQuestionIndex = signal<number>(0);
  private userAnswers = signal<Record<string, string>>({}); // questionId -> optionId
  private isQuizCompleted = signal<boolean>(false);

  // Computed
  readonly quizzes = this.quizList.asReadonly();
  readonly activeQuiz = this.currentQuiz.asReadonly();
  readonly isCompleted = this.isQuizCompleted.asReadonly();
  readonly questionIndex = this.currentQuestionIndex.asReadonly();
  readonly currentQuestion = computed(() => {
    const quiz = this.currentQuiz();
    const index = this.currentQuestionIndex();
    return quiz ? quiz.questions[index] : null;
  });
  readonly isLastQuestion = computed(() => {
    const quiz = this.currentQuiz();
    const index = this.currentQuestionIndex();
    return quiz ? index === quiz.questions.length - 1 : false;
  });
  readonly progress = computed(() => {
    const quiz = this.currentQuiz();
    const index = this.currentQuestionIndex();
    return quiz ? ((index + 1) / quiz.questions.length) * 100 : 0;
  });
  
  readonly results = computed(() => {
    if (!this.isQuizCompleted()) return null;
    const quiz = this.currentQuiz();
    const answers = this.userAnswers();
    if (!quiz) return null;

    let correctCount = 0;
    quiz.questions.forEach(q => {
      if (answers[q.id] === q.correctOptionId) {
        correctCount++;
      }
    });

    return {
      total: quiz.questions.length,
      correct: correctCount,
      percentage: (correctCount / quiz.questions.length) * 100
    };
  });

  constructor() {
    this.loadManifest();
  }

  private loadManifest() {
    this.http.get<QuizManifest[]>('quizzes/manifest.json').subscribe({
      next: (list) => this.quizList.set(list),
      error: (err) => console.error('Failed to load manifest', err)
    });
  }

  loadQuiz(filename: string) {
    this.resetQuiz();
    return this.http.get<Quiz>(`quizzes/${filename}`).pipe(
      tap(quiz => this.currentQuiz.set(quiz))
    );
  }

  answerQuestion(questionId: string, optionId: string) {
    this.userAnswers.update(answers => ({
      ...answers,
      [questionId]: optionId
    }));
  }

  nextQuestion() {
    const quiz = this.currentQuiz();
    if (quiz && this.currentQuestionIndex() < quiz.questions.length - 1) {
      this.currentQuestionIndex.update(i => i + 1);
    } else {
      this.completeQuiz();
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex() > 0) {
      this.currentQuestionIndex.update(i => i - 1);
    }
  }

  completeQuiz() {
    this.isQuizCompleted.set(true);
  }

  resetQuiz() {
    this.currentQuiz.set(null);
    this.currentQuestionIndex.set(0);
    this.userAnswers.set({});
    this.isQuizCompleted.set(false);
  }
  
  getUserAnswer(questionId: string) {
      return this.userAnswers()[questionId];
  }
}
