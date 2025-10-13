import styled from '@emotion/native';

export const Wrapper = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.Blue.B50,
  display: 'flex',
  padding: 24,
  gap: 4,
  borderRadius: 12,
}));

export const AnswerTitle = styled.Text(({ theme }) => ({
  ...theme.typography.Body1,
  color: theme.colors.Blue.B200,
}));

export const AnswerContext = styled.Text(({ theme }) => ({
  ...theme.typography.Body2,
  color: theme.colors.Neutral.N400,
}));
