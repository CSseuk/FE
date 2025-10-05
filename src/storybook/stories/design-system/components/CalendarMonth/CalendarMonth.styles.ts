import styled from '@emotion/native';

/** 블록 한 칸의 가로 기준(헤더 셀 폭과 맞춤) */
export const CELL = 30;
/** 칸 사이 간격 */
export const GAP = 14;

export const Container = styled.View({
  paddingHorizontal: 12,
  paddingTop: 8,
  paddingBottom: 4,
  alignItems: 'center',
});

export const HeaderRow = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
  gap: GAP,
});

export const HeaderCell = styled.View({
  width: CELL,
  alignItems: 'center',
  justifyContent: 'center',
});

export const HeaderText = styled.Text(({ theme }) => ({
  ...theme.typography.H3,
  color: theme.colors.Neutral.N600,
}));

export const Grid = styled.View({
  gap: 6,
});

export const WeekRow = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: GAP,
});

export const CellWrap = styled.View({
  width: CELL,
  alignItems: 'center',
  justifyContent: 'center',
});
