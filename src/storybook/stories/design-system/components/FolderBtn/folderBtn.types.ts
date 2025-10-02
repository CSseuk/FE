import type { ImageSourcePropType } from 'react-native';

export type Subject = {
  id: number;
  title: string;
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
