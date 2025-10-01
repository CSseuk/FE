import React, { useState } from "react";
import { storiesOf } from "@storybook/react-native";
import { ThemeProvider } from "@emotion/react";
import { View } from "react-native";
import theme from "@styles/theme";
import InputLabel from "./InputLabel";

const SIZES = ["S", "M", "L"] as const;

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <View
      style={{
        flex: 1,
        padding: 16,
        gap: 16,
        backgroundColor: theme.colors.Neutral.N0,
      }}
    >
      <Story />
    </View>
  </ThemeProvider>
);

const Case = ({
  size,
  withIcons,
  disabled = false,
}: {
  size: "S" | "M" | "L";
  withIcons?: boolean;
  disabled?: boolean;
}) => {
  const [value, setValue] = useState("");
  return (
    <InputLabel
      label={`Input Label (${withIcons ? "Icons" : "No Icons"})`}
      caption='Caption Text'
      placeholder='placeholder'
      value={value}
      onChange={setValue}
      size={size}
      leftIconName={withIcons ? "book" : undefined}
      rightIconName={withIcons ? "eye" : undefined}
      disabled={disabled}
    />
  );
};

const DefaultInputLabel = () => (
  <>
    {SIZES.map((s) => (
      <Case key={s} size={s} withIcons={true} />
    ))}
  </>
);

const DefaultInputLabel_NoIcons = () => (
  <>
    {SIZES.map((s) => (
      <Case key={s} size={s} />
    ))}
  </>
);

const DisabledInputLabel = () => (
  <>
    {SIZES.map((s) => (
      <Case key={s} size={s} withIcons={true} disabled />
    ))}
  </>
);

const DisabledInputLabel_NoIcons = () => (
  <>
    {SIZES.map((s) => (
      <Case key={s} size={s} disabled />
    ))}
  </>
);

storiesOf("Components/InputLabel", module)
  .addDecorator(withTheme)
  .add("Default (with Icons)", () => <DefaultInputLabel />)
  .add("Default (no Icons)", () => <DefaultInputLabel_NoIcons />)
  .add("Disabled (with Icons)", () => <DisabledInputLabel />)
  .add("Disabled (no Icons)", () => <DisabledInputLabel_NoIcons />);
