import React, { useMemo } from 'react';
import { useCalendarCells } from './useCalendarCells';
import CalendarBlock from '../CalendarBlock/CalendarBlock';
import * as S from './CalendarMonth.styles';

type CountsMap = Record<string, number>;

type CalendarMonthProps = {
  year: number;
  month: number; // 0~11
  counts?: CountsMap;
};

export default function CalendarMonth({
  year,
  month,
  counts = {},
}: CalendarMonthProps) {
  const weeks = useCalendarCells(year, month, counts);
  const WEEKDAY_LABELS = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <S.Container>
      {/* 요일 헤더 */}
      <S.HeaderRow>
        {WEEKDAY_LABELS.map((wd) => (
          <S.HeaderCell key={wd}>
            <S.HeaderText>{wd}</S.HeaderText>
          </S.HeaderCell>
        ))}
      </S.HeaderRow>

      {/* 그리드 */}
      <S.Grid>
        {weeks.map((week, i) => (
          <S.WeekRow key={`w-${i}`}>
            {week.map((cell, j) => (
              <S.CellWrap key={`c-${i}-${j}`}>
                <CalendarBlock
                  label={cell.label}
                  count={cell.count}
                  isToday={cell.isToday}
                  currentMonth={cell.currentMonth}
                />
              </S.CellWrap>
            ))}
          </S.WeekRow>
        ))}
      </S.Grid>
    </S.Container>
  );
}
