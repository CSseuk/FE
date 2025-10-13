import styled from '@emotion/native';

export const Container1 = styled.View(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 24,
  gap: 12,
  backgroundColor: theme.colors.Blue.B50,
}));

export const SolveCountContainer = styled.Text(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  gap: 4,
  borderRadius: 12,
  backgroundColor: theme.colors.Neutral.N0,
}));

export const SolveCount = styled.Text(({ theme }) => ({
  ...theme.typography.H3,
  color: theme.colors.Blue.B200,
}));

export const SolveCountBox = styled.View(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
}));

export const SolveCountCol = styled.View(() => ({
  width: '50%',

  display: 'flex',
  flexDirection: 'column',
  gap: 4,
}));

export const SolveCountValue = styled.Text(({ theme }) => ({
  ...theme.typography.Body3,
  color: theme.colors.Neutral.N80,

  width: '50%',
  height: '100%',
  dlay: 'flex',
  alignItems: 'center',
}));

export const SolveCountPercent = styled.Text(({ theme }) => ({
  ...theme.typography.Caption1,
  color: theme.colors.Blue.B200,

  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const SolveCountPercentLine = styled.Text(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: 6,
  borderRadius: 999,
  backgroundColor: theme.colors.Neutral.N40,
}));

export const SolveCountPercentLine2 = styled.View(({ theme }) => ({
  position: 'absolute',

  height: 6,
  borderRadius: 999,
  backgroundColor: theme.colors.Blue.B200,
}));
