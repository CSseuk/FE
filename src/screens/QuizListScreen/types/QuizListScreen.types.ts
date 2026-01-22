import { SolveState } from '@design-system/QBox/qbox.types';
import type { QuizType } from '@src/types/quiz';

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
