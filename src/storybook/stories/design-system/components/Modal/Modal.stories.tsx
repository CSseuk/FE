import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ThemeProvider } from "@emotion/react";

import Modal from "./Modal";
import theme from "@styles/theme";

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);

const CheckModal = () => {
  return (
    <Modal
      title='🎉 가입 완료 🎉'
      content={"이제 CS 문제를 쓱 풀고,\n나만의 기록을 쌓아보세요."}
      buttonType='single'
      onCancel={() => {}}
    />
  );
};

const ConfirmModal = () => {
  return (
    <Modal
      title='북마크를 해제하시겠어요?'
      content={"해제한 문제는 \n북마크 목록에서 사라져요."}
      buttonType='double'
      onCancel={() => {}}
      onConfirm={() => alert("confirm")}
    />
  );
};

const ContentModal = () => {
  return (
    <Modal content='Content Modal' onCancel={() => {}} exitButton={true} />
  );
};

storiesOf("Components/Modal (column)", module)
  .addDecorator(withTheme)
  .add("Check Modal", () => <CheckModal />)
  .add("Confirm Modal", () => <ConfirmModal />)
  .add("Content Modal", () => <ContentModal />);
