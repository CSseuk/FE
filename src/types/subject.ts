import type { ImageSourcePropType } from 'react-native';

import type { QuizType } from './quiz';

export type Subject = {
  id: number;
  title: string;
  type: QuizType;
  subtitle: string[];
  image: ImageSourcePropType;
  Colors: string;
  logo: ImageSourcePropType;
  count?: number;
  value?: unknown;
};
