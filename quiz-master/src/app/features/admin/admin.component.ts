import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormArray, FormGroup } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  fb = inject(FormBuilder);
  
  quizForm = this.fb.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    description: [''],
    questions: this.fb.array([])
  });

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  getOptions(questionIndex: number) {
    return this.questions.at(questionIndex).get('options') as FormArray;
  }

  addQuestion() {
    const questionGroup = this.fb.group({
      id: [this.generateId()],
      text: ['', Validators.required],
      // codeSnippet is optional, added dynamically
      options: this.fb.array([]),
      correctOptionId: ['', Validators.required],
      explanation: ['']
    });
    
    // Add default 2 options
    this.addOptionToGroup(questionGroup);
    this.addOptionToGroup(questionGroup);
    
    this.questions.push(questionGroup);
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  addOption(questionIndex: number) {
    const questionGroup = this.questions.at(questionIndex);
    this.addOptionToGroup(questionGroup);
  }

  private addOptionToGroup(questionGroup: any) {
    const options = questionGroup.get('options') as FormArray;
    options.push(this.fb.group({
      id: [this.generateId()],
      text: ['', Validators.required]
    }));
  }

  removeOption(questionIndex: number, optionIndex: number) {
    this.getOptions(questionIndex).removeAt(optionIndex);
  }

  setCorrectOption(questionIndex: number, optionId: string) {
    this.questions.at(questionIndex).patchValue({ correctOptionId: optionId });
  }

  hasCodeSnippet(index: number): boolean {
    return !!this.questions.at(index).get('codeSnippet');
  }

  toggleCodeSnippet(index: number, event: any) {
    const question = this.questions.at(index) as FormGroup;
    if (event.target.checked) {
      question.addControl('codeSnippet', this.fb.group({
        language: ['javascript'],
        code: ['']
      }));
    } else {
      question.removeControl('codeSnippet');
    }
  }

  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  downloadQuiz() {
    if (this.quizForm.valid) {
      const quizData = this.quizForm.value;
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(quizData, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", (quizData.id || "quiz") + ".json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }
  }
}
