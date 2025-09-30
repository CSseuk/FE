import { useModal } from "@contexts/ModalProvider";
import Button from "../Button/Button";
import * as S from "./Modal.styles";
import { ScrollView, ImageSourcePropType, Image } from "react-native";
import React from "react";

export type ButtonType = "single" | "double";

interface ModalProps {
  buttonType?: ButtonType;
  exitButton?: boolean;
  title?: string;
  content?: string;
  onConfirm?: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
}

export default function Modal({
  buttonType,
  exitButton = false,
  title,
  content,
  onConfirm,
  onCancel,
  children,
}: ModalProps) {
  const { setModalContent, setIsOpen } = useModal();

  // 모달 닫기 핸들러
  const handleClose = () => {
    setIsOpen(false);
    setModalContent(null);
    onCancel();
  };

  // 확인 버튼 클릭 핸들러
  const handleConfirm = () => {
    setIsOpen(false);
    setModalContent(null);
    if (onConfirm) {
      onConfirm();
    }
  };

  const icon: ImageSourcePropType = require("@assets/images/x_24_Default.png");

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          showsVerticalScrollIndicator={false}
        >
          {title && <S.Title>{title}</S.Title>}
          {/* children이 있으면 children, 아니면 content 렌더 */}
          {children ? children : <S.Content>{content}</S.Content>}
        </ScrollView>
        {buttonType && (
          <S.ButtonContainer buttonType={buttonType}>
            {buttonType === "double" && (
              <S.ButtonFlex>
                <Button
                  onPress={handleClose}
                  title='취소'
                  size='M'
                  button='Tertiary'
                />
              </S.ButtonFlex>
            )}
            <S.ButtonFlex>
              <Button onPress={handleConfirm} title='확인' size='M' />
            </S.ButtonFlex>
          </S.ButtonContainer>
        )}
        {exitButton && (
          <S.ExitButton>
            <Image source={icon} style={{ width: 24, height: 24 }} />
          </S.ExitButton>
        )}
      </S.ModalContent>
    </S.ModalContainer>
  );
}
