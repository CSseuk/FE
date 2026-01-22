import theme from '@styles/theme';
import type { ThemeType } from '@styles/theme';

export type ComponentSize = 'S' | 'M' | 'L';

type TypographyStyle = ThemeType['typography'][keyof ThemeType['typography']];

// 공통 사이즈 속성 (icon, gap, radius)
export const COMMON_SIZE_MAP: Record<
  ComponentSize,
  {
    icon: number;
    gap: number;
    radius: number;
  }
> = {
  S: {
    icon: 16,
    gap: 4,
    radius: 6,
  },
  M: {
    icon: 20,
    gap: 4,
    radius: 8,
  },
  L: {
    icon: 24,
    gap: 4,
    radius: 12,
  },
};

// Button 사이즈 맵
export const getButtonSizeMap = (size: ComponentSize) => {
  const common = COMMON_SIZE_MAP[size];

  const buttonSizeMap: Record<
    ComponentSize,
    {
      paddingH: number;
      font: TypographyStyle;
      icon: number;
      gap: number;
      radius: number;
      height: number;
    }
  > = {
    S: {
      ...common,
      paddingH: 4,
      font: theme.typography.Button_Small,
      height: 32,
    },
    M: {
      ...common,
      paddingH: 8,
      font: theme.typography.Button_Medium,
      height: 40,
    },
    L: {
      ...common,
      paddingH: 12,
      font: theme.typography.Button_Large,
      height: 52,
    },
  };

  return buttonSizeMap[size];
};

// Input 사이즈 맵
export const getInputSizeMap = (size: ComponentSize) => {
  const common = COMMON_SIZE_MAP[size];

  const inputSizeMap: Record<
    ComponentSize,
    {
      paddingV: number;
      paddingH: number;
      font: TypographyStyle;
      icon: number;
      gap: number;
      radius: number;
      height: number;
    }
  > = {
    S: {
      ...common,
      paddingV: 4,
      paddingH: 10,
      font: theme.typography.Body3,
      height: 30,
    },
    M: {
      ...common,
      paddingV: 8,
      paddingH: 14,
      font: theme.typography.Body2,
      height: 40,
    },
    L: {
      ...common,
      paddingV: 12,
      paddingH: 18,
      font: theme.typography.Body1,
      height: 52,
    },
  };

  return inputSizeMap[size];
};
