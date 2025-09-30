import React from "react";
import type { Meta, StoryObj } from "@storybook/react-native";
import { ThemeProvider } from "@emotion/react";
import Modal from "./Modal";
import theme from "@styles/theme";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const CheckModal: Story = {
  args: {
    title: "🎉 가입 완료 🎉",
    content: "이제 CS 문제를 쓱 풀고,\n나만의 기록을 쌓아보세요.",
    buttonType: "single",
    onCancel: () => {},
  },
};

export const ConfirmModal: Story = {
  args: {
    title: "북마크를 해제하시겠어요?",
    content: "해제한 문제는 \n북마크 목록에서 사라져요.",
    buttonType: "double",
    onCancel: () => {},
    onConfirm: () => alert("confirm"),
  },
};
