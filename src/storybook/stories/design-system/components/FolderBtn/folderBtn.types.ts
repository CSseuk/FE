import type { ImageSourcePropType } from 'react-native';
import type { QuizType } from '@src/types/quiz';

export type Subject = {
  id: number;
  title: string;
  type: QuizType;
  subtitle: string[];
  image: ImageSourcePropType;
  Colors: string;
  logo: ImageSourcePropType;
  count?: number;
  value?: any;
};

export type FolderBtnProps = {
  subjects?: Subject[];
  selectedId?: number | null;
  numColumns?: number;
  onSelect?: (subject: Subject) => void;
  onPressSubject?: (subject: Subject) => void;
};
