import styled from '@emotion/native';

export const InputLabelContainer = styled.View`
  gap: 8px;
  width: 100%;
  align-items: flex-start;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Neutral.N0};
`;

export const Label = styled.Text(({ theme }) => ({
  ...theme.typography.Body1,
  color: theme.colors.Neutral.N600,
}));

export const Caption = styled.Text(({ theme }) => ({
  ...theme.typography.Body3,
  color: theme.colors.Neutral.N200,
}));

export const TextInputBox = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.Neutral.N600};
  margin-left: 4;
  margin-right: 4;
`;
