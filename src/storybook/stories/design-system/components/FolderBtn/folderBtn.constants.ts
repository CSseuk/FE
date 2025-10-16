import type { Subject } from '@src/types/subject';
import { SUBJECTS } from '@constants/subject';

export const SCREEN_PADDING = 0;
export const GAP = 12;
export const BASE_WIDTH = 180;

export const DEFAULT_SUBJECTS = (colors: any): Subject[] => SUBJECTS(colors);
