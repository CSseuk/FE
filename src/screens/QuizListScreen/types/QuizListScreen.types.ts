import type { QuizType } from '@src/types/quiz';
import { SolveState } from '@design-system/QBox/qbox.types';

type QuizListItem = {
  id: number;
  type: QuizType;
  title: string;
  description: string;
  isSolved: SolveState;
  isBookmarked: boolean;
};

export type QuizListScreenItem = {
  Allcount: number;
  SolveCount: number;
  QuizListItem: QuizListItem[];
};
