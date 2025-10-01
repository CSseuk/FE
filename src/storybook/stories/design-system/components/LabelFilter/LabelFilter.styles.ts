import styled from "@emotion/native";

export const Wrapper = styled.View<{
  bg: string;
  border: string;
  disabled: boolean;
}>(({ bg, border, disabled, theme }) => ({
  alignSelf: "flex-start",
  paddingVertical: 8,
  paddingHorizontal: 14,
  borderRadius: 8,
  backgroundColor: disabled ? theme.colors.Neutral.N0 : bg,
  borderWidth: 1,
  borderColor: disabled ? theme.colors.Neutral.N60 : border,
}));

export const Text = styled.Text<{ disabled: boolean; color: string }>(
  ({ disabled, color, theme }) => ({
    ...theme.typography.Button_Medium,
    color: disabled ? theme.colors.Neutral.N60 : color,
  })
);
