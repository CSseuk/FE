import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';

export const SafeWrapper = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.Neutral.N0,
}));

export const Wrapper = styled.View({
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: 24,
  gap: 80,
});

export const AppBox = styled(LinearGradient)({
  justifyContent: 'center',
  alignItems: 'center',
  width: 48,
  height: 48,
  borderRadius: 6,
});

export const Title = styled.Text(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Neutral.N800,
}));

export const HighlightText = styled(Title)(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Blue.B200,
}));

export const Heading = styled.View({
  gap: 24,
  justifyContent: 'flex-start',
  width: '100%',
});

export const InputContainer = styled.View({
  width: '100%',
  gap: 12,
});

export const LoginContainer = styled.View({
  gap: 24,
  alignItems: 'center',
  width: '100%',
});
