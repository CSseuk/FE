import type { QuizType } from '@src/types/quiz';

export type DocsType = {
  quizType: QuizType;
  title: string;
  content: string; // md 문자열
};
