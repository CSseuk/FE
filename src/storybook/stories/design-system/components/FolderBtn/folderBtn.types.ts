import type { Subject } from '@src/types/subject';

export type FolderBtnProps = {
  subjects?: Subject[];
  selectedId?: number | null;
  numColumns?: number;
  onSelect?: (subject: Subject) => void;
  onPressSubject?: (subject: Subject) => void;
};
