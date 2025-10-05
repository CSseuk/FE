import styled from '@emotion/native';

export const Container = styled.View`
  align-items: center;
`;

export const Square = styled.View`
  border-radius: 4px;
  width: 20px;
  height: 20px;
`;

export const Label = styled.Text`
  z-index: 1;
  ${({ theme }) => theme.typography.Caption1};
`;

export const LabelWrapper = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`;

export const ActiveCircle = styled.View`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.Neutral.N90};
  z-index: 0;
`;
