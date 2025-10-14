import styled from '@emotion/native';

export const Container = styled.View(() => ({
  display: 'flex',
  gap: 12,
}));

export const Title = styled.Text(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Neutral.N600,
}));

export const Prompt = styled.Text(({ theme }) => ({
  ...theme.typography.H3,
  color: theme.colors.Neutral.N400,
}));
