import styled from '@emotion/native';

export const Wrapper = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: theme.colors.Neutral.N0 || '#ffffff',
}));

export const Container = styled.View(() => ({
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 24,
  paddingHorizontal: 8,
}));

export const Title = styled.Text(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Neutral.N800,
}));

export const DetailText = styled.Text(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Blue.B200,
}));
