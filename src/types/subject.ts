import type { QuizType } from './quiz';
import type { ImageSourcePropType } from 'react-native';

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
