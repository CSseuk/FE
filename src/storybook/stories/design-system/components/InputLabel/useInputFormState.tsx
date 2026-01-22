import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

import type { InputIconProps } from './useInputLabel';

type FeatherName = React.ComponentProps<typeof Feather>['name'];

export type InputFormIconProps = {
  leftIconName?: FeatherName;
  rightIconName?: FeatherName;
  leftIconNode?: React.ReactNode;
  rightIconNode?: React.ReactNode;
  onRightIconPress?: () => void;
};

export const useInputFormState = (iconProps: InputFormIconProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputIconProps: InputIconProps = {
    leftIconName: iconProps.leftIconName,
    rightIconName: iconProps.rightIconName,
    leftIconNode: iconProps.leftIconNode,
    rightIconNode: iconProps.rightIconNode,
    onRightIconPress: iconProps.onRightIconPress,
  };

  return {
    isFocused,
    setIsFocused,
    iconProps: inputIconProps,
  };
};
