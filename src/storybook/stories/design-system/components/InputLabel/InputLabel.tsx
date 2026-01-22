import { Feather } from '@expo/vector-icons';
import React from 'react';

import { InputField } from './InputField';
import * as S from './InputLabel.styles';
import { useInputFormState } from './useInputFormState';
import type { InputSize } from './useInputLabel';

type FeatherName = React.ComponentProps<typeof Feather>['name'];

type InputLabelProps = {
  size?: InputSize;
  disabled?: boolean;
  label?: string;
  caption?: string;
  placeholder: string;
  leftIconName?: FeatherName;
  rightIconName?: FeatherName;
  leftIconNode?: React.ReactNode;
  rightIconNode?: React.ReactNode;
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  secureTextEntry?: boolean;
  onRightIconPress?: () => void;
};

export default function InputLabel({
  size = 'L',
  disabled = false,
  label,
  caption,
  placeholder,
  leftIconName,
  rightIconName,
  leftIconNode,
  rightIconNode,
  value,
  onChange,
  readOnly,
  secureTextEntry = false,
  onRightIconPress,
}: InputLabelProps) {
  const { isFocused, setIsFocused, iconProps } = useInputFormState({
    leftIconName,
    rightIconName,
    leftIconNode,
    rightIconNode,
    onRightIconPress,
  });

  return (
    <S.InputLabelContainer style={{ opacity: disabled && !readOnly ? 0.5 : 1 }}>
      {label && <S.Label>{label}</S.Label>}
      <InputField
        size={size}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        secureTextEntry={secureTextEntry}
        onChange={onChange}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        iconProps={iconProps}
      />
      {caption && <S.Caption>{caption}</S.Caption>}
    </S.InputLabelContainer>
  );
}
