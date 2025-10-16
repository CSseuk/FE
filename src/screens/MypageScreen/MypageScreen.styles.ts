import styled from '@emotion/native';

export const Wrapper = styled.ScrollView(({ theme }) => ({
  flex: 1,
  padding: 24,
  backgroundColor: theme.colors.Neutral.N0,
}));

export const Spacing = styled.View({
  height: 36,
});
