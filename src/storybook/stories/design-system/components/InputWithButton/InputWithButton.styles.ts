import styled from '@emotion/native';

import { Label, Caption } from '../InputLabel/InputLabel.styles';

export const InputWithButtonContainer = styled.View({
  gap: 8,
  width: '100%',
  alignItems: 'flex-start',
});

export const InputRow = styled.View({
  flexDirection: 'row',
  gap: 8,
  alignItems: 'stretch',
  width: '100%',
});

export const InputWrapper = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.colors.Neutral.N0,
}));

export const TextInputBox = styled.TextInput(({ theme }) => ({
  flex: 1,
  color: theme.colors.Neutral.N600,
  marginLeft: 4,
  marginRight: 4,
}));

export const ButtonContainer = styled.View({
  justifyContent: 'center',
  flexShrink: 1,
  alignSelf: 'flex-start',
});

export { Label, Caption };
