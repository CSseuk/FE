import React from 'react';
import { CalendarMonth } from '@design-system/index';
import { useMonthPicker } from '../../hooks/useMonthPicker';
import * as S from './CalendarSection.styles';

interface CalendarSectionProps {
  initialDate?: Date;
  data: Record<string, number>;
}

export default function CalendarSection({
  initialDate = new Date(),
  data,
}: CalendarSectionProps) {
  const { year, month, prevMonth, nextMonth, label, canGoNext } =
    useMonthPicker(initialDate);

  return (
    <S.CalendarWrapper>
      <S.CalendarHeader>
        <S.Title>나의 학습기록</S.Title>

        {/* 달 선택 피커 */}
        <S.Picker>
          <S.ArrowButton
            onPress={prevMonth}
            hitSlop={8} // 터치 영역 확장 (상하좌우 8px → 실제 터치 영역 약 32×32px)
            accessibilityLabel="이전 달"
          >
            <S.ArrowIcon
              source={require('@src/assets/images/lArrow_16_Default.png')}
            />
          </S.ArrowButton>

          <S.PickerLabel>{label}</S.PickerLabel>

          <S.ArrowButton
            onPress={nextMonth}
            hitSlop={8}
            accessibilityLabel="다음 달"
            disabled={!canGoNext}
            style={{ opacity: canGoNext ? 1 : 0.4 }} // 비활성화 시 시각적 처리
          >
            <S.ArrowIcon
              source={require('@src/assets/images/rArrow_16_Default.png')}
            />
          </S.ArrowButton>
        </S.Picker>
      </S.CalendarHeader>

      {/* 실제 달력 */}
      <CalendarMonth year={year} month={month} counts={data} />
    </S.CalendarWrapper>
  );
}
