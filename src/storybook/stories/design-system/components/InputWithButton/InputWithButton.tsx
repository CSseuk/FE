import { Button } from '@design-system/index';
import { Feather } from '@expo/vector-icons';
import React from 'react';

import { InputField } from '../InputLabel/InputField';
import { useInputFormState } from '../InputLabel/useInputFormState';
import { getInputSizeMap, type InputSize } from '../InputLabel/useInputLabel';

import * as S from './InputWithButton.styles';

type FeatherName = React.ComponentProps<typeof Feather>['name'];

type InputWithButtonProps = {
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
  buttonTitle: string;
  onButtonPress: () => void;
  buttonSize?: InputSize;
  buttonVariant?: 'Primary' | 'Tertiary';
  buttonDisabled?: boolean;
  buttonWidth?: number;
};

export default function InputWithButton({
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
  buttonTitle,
  onButtonPress,
  buttonSize = 'L',
  buttonVariant = 'Primary',
  buttonDisabled = false,
  buttonWidth = 100,
}: InputWithButtonProps) {
  const { isFocused, setIsFocused, iconProps } = useInputFormState({
    leftIconName,
    rightIconName,
    leftIconNode,
    rightIconNode,
    onRightIconPress,
  });

  // Input의 높이에 맞춰 버튼 높이 계산
  const inputSizeMap = getInputSizeMap(size);
  const buttonHeight = inputSizeMap.height;

  return (
    <S.InputWithButtonContainer
      style={{ opacity: disabled && !readOnly ? 0.5 : 1 }}
    >
      {label && <S.Label>{label}</S.Label>}
      <S.InputRow>
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
          // 인풋은 남는 가로 공간을 모두 차지하고, 버튼은 텍스트 길이에 따라 너비가 결정되도록 한다.
          wrapperStyle={{ flex: 1, height: buttonHeight }}
        />
        <S.ButtonContainer>
          <Button
            title={buttonTitle}
            size={buttonSize}
            button={buttonVariant}
            status={buttonDisabled ? 'Disabled' : 'Default'}
            onPress={onButtonPress}
            style={{
              height: buttonHeight,
              width: buttonWidth,
              alignSelf: 'flex-start',
            }}
          />
        </S.ButtonContainer>
      </S.InputRow>
      {caption && <S.Caption>{caption}</S.Caption>}
    </S.InputWithButtonContainer>
  );
}
