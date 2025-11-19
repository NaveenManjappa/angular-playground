import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuizService } from '../../shared/services/quiz.service';
import { MarkdownComponent } from 'ngx-markdown';
import { NgClass, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [MarkdownComponent, RouterLink, DecimalPipe],
  templateUrl: './quiz.component.html'
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
