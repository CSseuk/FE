import { useMemo, useState } from 'react';

function normalize(y: number, m: number) {
  // m이 0~11 범위를 벗어나면 연도 보정
  if (m < 0) {
    y -= Math.ceil((0 - m) / 12);
    m = ((m % 12) + 12) % 12;
  } else if (m > 11) {
    y += Math.floor(m / 12);
    m = m % 12;
  }
  return { y, m };
}

export function useMonthPicker(initial = new Date()) {
  const [year, setYear] = useState(initial.getFullYear());
  const [month, setMonth] = useState(initial.getMonth()); // 0~11

  const today = new Date();

  // 이전 달로 이동
  const prevMonth = () => {
    const { y, m } = normalize(year, month - 1);
    setYear(y);
    setMonth(m);
  };

  // 미래의 달로 이동 가능한지 여부
  const canGoNext =
    year < today.getFullYear() ||
    (year === today.getFullYear() && month < today.getMonth());

  // 미래의 달로 이동
  const nextMonth = () => {
    if (!canGoNext) return;
    const { y, m } = normalize(year, month + 1);
    setYear(y);
    setMonth(m);
  };

  /** YYYY년 MM월 형식의 표시 라벨 */
  const label = useMemo(() => {
    const mm = (month + 1).toString().padStart(2, '0');
    return `${year}년 ${mm}월`;
  }, [year, month]);

  return {
    year,
    month,
    prevMonth,
    nextMonth,
    label,
    setYear,
    setMonth,
    canGoNext,
  };
}
