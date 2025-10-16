import styled from '@emotion/native';

export const Container = styled.View({
  padding: 12,
  alignItems: 'center',
  width: '100%',
});

export const HeaderRow = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
  width: '100%',
});

export const HeaderCell = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const HeaderText = styled.Text(({ theme }) => ({
  ...theme.typography.H3,
  color: theme.colors.Neutral.N600,
}));

export const Grid = styled.View({
  gap: 6,
  width: '100%',
});

export const WeekRow = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const CellWrap = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
