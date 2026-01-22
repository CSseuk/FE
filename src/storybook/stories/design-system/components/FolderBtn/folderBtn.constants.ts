import { SUBJECTS } from '@constants/subject';
import type { Subject } from '@src/types/subject';
import type { ThemeType } from '@styles/theme';

export const SCREEN_PADDING = 0;
export const GAP = 12;
export const BASE_WIDTH = 180;

export const DEFAULT_SUBJECTS = (colors: ThemeType['colors']): Subject[] =>
  SUBJECTS(colors);
