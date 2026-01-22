import styled from '@emotion/native';

export const LinksContainer = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
});

export const LinkText = styled.Text(({ theme }) => ({
  ...theme.typography.Body2,
  color: theme.colors.Neutral.N200,
}));

export const Divider = styled.View(({ theme }) => ({
  width: 1,
  height: 12,
  backgroundColor: theme.colors.Neutral.N60,
}));
