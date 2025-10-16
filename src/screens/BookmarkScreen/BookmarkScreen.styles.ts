import styled from '@emotion/native';

export const Wrapper = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: theme.colors.Neutral.N0 || '#ffffff',
  padding: 24,
}));

export const Container = styled.View(() => ({
  flex: 1,
  width: '100%',
  gap: 36,
}));

export const Title = styled.Text(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Neutral.N800,
}));

export const DetailText = styled.Text(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Blue.B200,
}));

export const EmptyText = styled.Text(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Neutral.N800,
}));

export const Separator = styled.View({
  height: 24,
});
