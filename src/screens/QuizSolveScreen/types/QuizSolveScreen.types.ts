import type { QuizType } from '@src/types/quiz';

export type QuestionKind = 'MCQ' | 'SUBJECTIVE';

export type QuizDetail = {
  id: number;
  type: QuizType;
  kind: QuestionKind;
  title: string;
  prompt: string;
  // MCQ 전용
  options?: { id: string; text: string }[];
  correctOptionId?: string;
  // SUBJECTIVE 전용 (간단 키워드 매칭 예시)
  correctAnswer?: string;
  // 공통
  explanation?: string;
};
