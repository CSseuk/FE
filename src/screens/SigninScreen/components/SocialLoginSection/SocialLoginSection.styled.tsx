import styled from '@emotion/native';

export const Container = styled.View({
  width: '100%',
});

export const SNSDivider = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  gap: 12,
});

export const SNSDividerLine = styled.View(({ theme }) => ({
  flex: 1,
  height: 1,
  backgroundColor: theme.colors.Neutral.N60,
}));

export const SNSDividerText = styled.Text(({ theme }) => ({
  ...theme.typography.Body3,
  color: theme.colors.Neutral.N200,
}));

export const SocialLoginContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
  marginTop: 16,
});

