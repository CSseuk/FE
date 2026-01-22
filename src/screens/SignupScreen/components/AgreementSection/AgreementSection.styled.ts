import styled from '@emotion/native';

export const AgreementSection = styled.View({
  gap: 16,
  width: '100%',
});

export const AgreementItem = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const AgreementText = styled.Text(({ theme }) => ({
  ...theme.typography.Body2,
  color: theme.colors.Neutral.N600,
  flex: 1,
}));

export const ViewLink = styled.Pressable({
  paddingVertical: 4,
  paddingHorizontal: 8,
});

export const ViewLinkText = styled.Text(({ theme }) => ({
  ...theme.typography.Body3,
  color: theme.colors.Neutral.N400,
}));
