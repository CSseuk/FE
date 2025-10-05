import { useMemo } from 'react';
import { iso, getDaysInMonth } from './calendarMonth.utils';

type CountsMap = Record<string, number>;

export function useCalendarCells(
  year: number,
  month: number,
  counts: CountsMap
) {
  const today = new Date();
  const daysInThis = getDaysInMonth(year, month);
  const daysInPrev = getDaysInMonth(year, month - 1);
  const firstOffset = new Date(year, month, 1).getDay();

  const cells = useMemo(() => {
    const total = 35;
    const arr: {
      label: number;
      dateISO: string;
      count: number;
      currentMonth: boolean;
      isToday: boolean;
    }[] = [];

    for (let i = 0; i < total; i++) {
      if (i < firstOffset) {
        const label = daysInPrev - firstOffset + 1 + i;
        const y = month === 0 ? year - 1 : year;
        const m = month === 0 ? 11 : month - 1;
        const dateStr = iso(y, m, label);
        arr.push({
          label,
          dateISO: dateStr,
          count: counts[dateStr] ?? 0,
          currentMonth: false,
          isToday: false,
        });
        continue;
      }

      const dayNum = i - firstOffset + 1;
      if (dayNum <= daysInThis) {
        const dateStr = iso(year, month, dayNum);
        const isToday =
          today.getFullYear() === year &&
          today.getMonth() === month &&
          today.getDate() === dayNum;
        arr.push({
          label: dayNum,
          dateISO: dateStr,
          count: counts[dateStr] ?? 0,
          currentMonth: true,
          isToday,
        });
        continue;
      }

      const nextLabel = dayNum - daysInThis;
      const y = month === 11 ? year + 1 : year;
      const m = month === 11 ? 0 : month + 1;
      const dateStr = iso(y, m, nextLabel);
      arr.push({
        label: nextLabel,
        dateISO: dateStr,
        count: counts[dateStr] ?? 0,
        currentMonth: false,
        isToday: false,
      });
    }

    return arr;
  }, [year, month, counts]);

  const weeks = useMemo(
    () => Array.from({ length: 6 }, (_, w) => cells.slice(w * 7, w * 7 + 7)),
    [cells]
  );

  return weeks;
}
