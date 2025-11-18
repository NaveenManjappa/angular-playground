export interface Option {
  id: string;
  text: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
}

export interface Question {
  id: string;
  text: string;
  codeSnippet?: CodeSnippet;
  options: Option[];
  correctOptionId: string;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface QuizManifest {
  id: string;
  title: string;
  description: string;
  filename: string;
}
