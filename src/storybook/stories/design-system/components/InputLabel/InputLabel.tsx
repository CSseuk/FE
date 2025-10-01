import React, { useState } from 'react';
import theme from '@styles/theme';
import { Feather } from '@expo/vector-icons';
import * as S from './InputLabel.styles';
import { View, Image, TextInput } from 'react-native';

type FeatherName = React.ComponentProps<typeof Feather>['name'];

type size = 'S' | 'M' | 'L';

type Props = {
  size?: size;
  disabled?: boolean;
  label: string;
  caption?: string;
  placeholder: string;
  leftIconName?: FeatherName;
  rightIconName?: FeatherName;
  leftIconNode?: React.ReactNode;
  rightIconNode?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
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
}: Props) {
  const sizeMap: Record<
    size,
    {
      paddingV: number;
      paddingH: number;
      font: any;
      icon: number;
      gap: number;
      radius?: number;
    }
  > = {
    S: {
      paddingV: 4,
      paddingH: 10,
      font: theme.typography.Body3,
      icon: 16,
      gap: 4,
      radius: 6,
    },
    M: {
      paddingV: 8,
      paddingH: 14,
      font: theme.typography.Body2,
      icon: 20,
      gap: 4,
      radius: 8,
    },
    L: {
      paddingV: 12,
      paddingH: 18,
      font: theme.typography.Body1,
      icon: 24,
      gap: 4,
      radius: 12,
    },
  };

  const { paddingV, paddingH, font, icon, gap, radius } = sizeMap[size];

  const borderColor =
    value && value.length > 0
      ? theme.colors.Blue.B100
      : theme.colors.Neutral.N60;

  const buildLeftIcon = () => {
    if (leftIconNode)
      return <View style={{ marginRight: gap }}>{leftIconNode}</View>;
    if (leftIconName)
      return (
        <Feather
          name={leftIconName}
          size={icon}
          color={theme.colors.Neutral.N800}
        />
      );
    return null;
  };

  const buildRightIcon = () => {
    if (rightIconNode)
      return <View style={{ marginLeft: gap }}>{rightIconNode}</View>;
    if (rightIconName)
      return (
        <Feather
          name={rightIconName}
          size={icon}
          color={theme.colors.Neutral.N800}
        />
      );
    return null;
  };
  const [isFocused, setIsFocused] = useState(false);

  return (
    <S.InputLabelContainer style={{ opacity: disabled ? 0.5 : 1 }}>
      <S.Label>{label}</S.Label>
      <S.InputWrapper
        style={{
          paddingVertical: paddingV,
          paddingHorizontal: paddingH,
          borderRadius: radius,
          borderColor: borderColor,
          borderWidth: 1,
          shadowColor: isFocused ? theme.colors.Blue.B75 : 'transparent',
          shadowOpacity: 1,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 0 },
          elevation: isFocused ? 2 : 0,
        }}
        onStartShouldSetResponder={() => true}
        onStartShouldSetResponderCapture={() => true}
        onResponderTerminationRequest={() => false}
      >
        {buildLeftIcon()}
        <S.TextInputBox
          style={font}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.Neutral.N100}
          editable={!disabled}
          value={value}
          onChangeText={onChange}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        {buildRightIcon()}
      </S.InputWrapper>
      {caption && <S.Caption>{caption}</S.Caption>}
    </S.InputLabelContainer>
  );
}
