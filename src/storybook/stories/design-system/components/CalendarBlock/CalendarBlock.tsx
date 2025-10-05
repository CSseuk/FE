import React from 'react';
import theme from '@styles/theme';
import * as S from './CalendarBlock.styles';

type CalendarBlockProps = {
  label: string | number;
  count?: number;
  currentDate?: boolean;
  currentMonth?: boolean;
};

export default function CalendarBlock({
  label,
  count = 0,
  currentDate = false,
  currentMonth = true,
}: CalendarBlockProps) {
  // count 구간별 색상 매핑
  const colorMap: Record<string, string> = {
    zero: theme.colors.Neutral.N20,
    low: theme.colors.Blue.B50,
    mid: theme.colors.Blue.B100,
    high: theme.colors.Blue.B200,
    max: theme.colors.Blue.B400,
  };

  // count에 따라 색상 선택
  const getColorByCount = (count: number) => {
    if (count === 0) return colorMap.zero;
    if (count <= 5) return colorMap.low;
    if (count <= 10) return colorMap.mid;
    if (count <= 15) return colorMap.high;
    return colorMap.max;
  };

  const getTextColor = () => {
    if (currentDate) return theme.colors.Neutral.N0;
    if (currentMonth) return theme.colors.Neutral.N600;
    return theme.colors.Neutral.N50;
  };

  const backgroundColor = getColorByCount(count);
  const textColor = getTextColor();
  return (
    <S.Container>
      <S.Square style={{ backgroundColor }} />
      <S.LabelWrapper>
        {currentDate && <S.ActiveCircle />}
        <S.Label style={{ color: textColor }}>{label}</S.Label>
      </S.LabelWrapper>
    </S.Container>
  );
}
