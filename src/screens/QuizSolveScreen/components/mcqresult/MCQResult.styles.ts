import styled from '@emotion/native';

export const Wrapper = styled.View(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 36,
}));

export const ColCon = styled.View(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const RowCon = styled.View(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Image = styled.Image(() => ({
  width: 24,
  height: 24,
}));

export const RWText = styled.Text(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Neutral.N600,
}));

export const SelectAnswer = styled.Text(({ theme }) => ({
  ...theme.typography.Button_Medium,
  color: theme.colors.Red.R200,
}));
