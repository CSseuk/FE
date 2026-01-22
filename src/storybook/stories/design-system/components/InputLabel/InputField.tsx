import theme from '@styles/theme';
import React from 'react';
import { ViewStyle } from 'react-native';

import * as S from './InputLabel.styles';
import { useInputLabel, InputSize, InputIconProps } from './useInputLabel';

type InputFieldProps = {
  size: InputSize;
  value: string;
  placeholder: string;
  disabled?: boolean;
  readOnly?: boolean;
  secureTextEntry?: boolean;
  onChange?: (value: string) => void;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  iconProps: InputIconProps;
  wrapperStyle?: ViewStyle;
  inputStyle?: ViewStyle | ViewStyle[];
};

export const InputField = ({
  size,
  value,
  placeholder,
  disabled = false,
  readOnly,
  secureTextEntry = false,
  onChange,
  isFocused,
  onFocus,
  onBlur,
  iconProps,
  wrapperStyle,
  inputStyle,
}: InputFieldProps) => {
  const {
    paddingV,
    paddingH,
    font,
    radius,
    borderColor,
    buildLeftIcon,
    buildRightIcon,
    height,
  } = useInputLabel(size, value, iconProps);

  return (
    <S.InputWrapper
      pointerEvents="box-none"
      style={[
        {
          paddingVertical: paddingV,
          paddingHorizontal: paddingH,
          borderRadius: radius,
          borderColor: borderColor,
          borderWidth: 1,
          height: height,
          shadowColor: isFocused ? theme.colors.Blue.B75 : 'transparent',
          shadowOpacity: 1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 0 },
          elevation: isFocused ? 2 : 0,
        },
        wrapperStyle,
      ]}
    >
      {buildLeftIcon()}
      <S.TextInputBox
        pointerEvents="auto"
        style={[
          font,
          readOnly && {
            color: theme.colors.Blue.B200,
            borderColor: theme.colors.Neutral.N60,
          },
          inputStyle,
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.Neutral.N50}
        editable={!disabled && !readOnly}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {buildRightIcon()}
    </S.InputWrapper>
  );
};
