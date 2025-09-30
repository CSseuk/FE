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

// CheckModal - 단일 확인 버튼만 있는 단순 알림용 모달
// 필수 props:
//   - title: 모달 상단 제목
//   - content (또는 children): 모달 본문
//   - buttonType="single": 단일 버튼 모드
//   - onCancel: 확인 버튼 클릭 시 실행되는 핸들러
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

// ConfirmModal - 확인/취소 두 개의 버튼이 있는 선택용 모달
// 필수 props:
//   - title: 모달 상단 제목
//   - content (또는 children): 모달 본문
//   - buttonType="double": 확인/취소 버튼 모드
//   - onCancel: 취소 버튼 클릭 시 실행되는 핸들러
//   - onConfirm: 확인 버튼 클릭 시 실행되는 핸들러
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

// ContentModal - 닫기(X) 버튼만 있는 정보 표시용 모달
// 필수 props:
//   - content (또는 children): 모달 본문
//   - onCancel: 닫기 버튼 클릭 시 실행되는 핸들러
//   - exitButton={true}: 닫기(X) 버튼 활성화
const ContentModal = () => {
  return (
    <Modal content={"Content\nModal"} onCancel={() => {}} exitButton={true} />
  );
};

storiesOf("Components/Modal", module)
  .addDecorator(withTheme)
  .add("Check Modal", () => <CheckModal />)
  .add("Confirm Modal", () => <ConfirmModal />)
  .add("Content Modal", () => <ContentModal />);
