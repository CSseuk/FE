import styled from "@emotion/native";
import type { ButtonType } from "./Modal";

export const ModalContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.View`
  width: 80%;
  padding: 24px;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.Neutral.N0};
  border-radius: 12px;
`;

export const Title = styled.Text`
  font: ${({ theme }) => theme.typography.H2};
  color: ${({ theme }) => theme.colors.Neutral.N600};
`;

export const Content = styled.Text`
  margin-top: 8px;
  font: ${({ theme }) => theme.typography.Body1};
  color: ${({ theme }) => theme.colors.Neutral.N400};
`;

export const ButtonContainer = styled.View<{ buttonType: ButtonType }>`
  margin-top: 24px;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  align-self: stretch;
  justify-content: ${({ buttonType }) =>
    buttonType === "single" ? "center" : "space-between"};
`;

export const ButtonFlex = styled.View`
  flex: 1;
`;
