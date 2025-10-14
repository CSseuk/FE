import styled from '@emotion/native';

export const Wrapper = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.Neutral.N0,
}));

export const Container2 = styled.View(({ theme }) => ({
  flex: 1,
  display: 'flex',

  gap: 24,
}));

export const Separator = styled.View({
  height: 24,
});
