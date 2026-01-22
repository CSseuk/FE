import type { QuizType } from '@src/types/quiz';
import type { ImageSourcePropType } from 'react-native';

export type SolveState = 'Solved' | 'Wrong' | 'NotSolved';

export type QBoxProps = {
  Section?: QuizType;
  title?: string;
  description?: string;
  isSolved?: SolveState;
  isLabeled?: boolean;
  isBookmarked?: 'true' | 'false';
  onPress?: () => void;
  onToggleBookmark?: (next: boolean) => void;
};

export type StatusMeta = {
  key: SolveState;
  color: string;
  text: string;
  icon: ImageSourcePropType;
};
