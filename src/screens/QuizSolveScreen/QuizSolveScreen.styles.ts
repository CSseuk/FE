import styled from '@emotion/native';

export const Wrapper = styled.View(({ theme }) => ({
  position: 'relative',
  flex: 1,

  backgroundColor: theme.colors.Neutral.N0,
}));

export const Container = styled.View(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 24,
}));
