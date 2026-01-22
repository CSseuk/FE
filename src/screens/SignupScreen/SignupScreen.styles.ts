import styled from '@emotion/native';
import { ScrollView } from 'react-native';

export const SafeWrapper = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.Neutral.N0,
}));

export const ScrollContainer = styled(ScrollView)({
  flex: 1,
});

export const Container = styled.View({
  padding: 24,
  gap: 24,
});
