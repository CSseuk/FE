import {
  getInputSizeMap as getInputSizeMapFromShared,
  type ComponentSize,
} from '@constants/componentSize';
import { Feather } from '@expo/vector-icons';
import theme from '@styles/theme';
import React from 'react';
import { View, Pressable } from 'react-native';

type FeatherName = React.ComponentProps<typeof Feather>['name'];
export type InputSize = ComponentSize;

export type InputIconProps = {
  leftIconName?: FeatherName;
  rightIconName?: FeatherName;
  leftIconNode?: React.ReactNode;
  rightIconNode?: React.ReactNode;
  onRightIconPress?: () => void;
};

export const getInputSizeMap = (size: InputSize) => {
  return getInputSizeMapFromShared(size);
};

export const useInputLabel = (
  size: InputSize,
  value: string,
  iconProps: InputIconProps
) => {
  const { paddingV, paddingH, font, icon, gap, radius, height } =
    getInputSizeMap(size);

  const borderColor =
    value && value.length > 0
      ? theme.colors.Blue.B100
      : theme.colors.Neutral.N60;

  const buildLeftIcon = () => {
    const { leftIconNode, leftIconName } = iconProps;
    if (leftIconNode)
      return (
        <View style={{ marginRight: gap }} pointerEvents="none">
          {leftIconNode}
        </View>
      );
    if (leftIconName)
      return (
        <View pointerEvents="none">
          <Feather
            name={leftIconName}
            size={icon}
            color={theme.colors.Neutral.N800}
          />
        </View>
      );
    return null;
  };

  const buildRightIcon = () => {
    const { rightIconNode, rightIconName, onRightIconPress } = iconProps;
    if (rightIconNode) {
      if (onRightIconPress) {
        return (
          <Pressable
            onPress={onRightIconPress}
            style={{ marginLeft: gap }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            pointerEvents="box-only"
          >
            {rightIconNode}
          </Pressable>
        );
      }
      return (
        <View style={{ marginLeft: gap }} pointerEvents="none">
          {rightIconNode}
        </View>
      );
    }
    if (rightIconName) {
      const iconElement = (
        <Feather
          name={rightIconName}
          size={icon}
          color={theme.colors.Neutral.N800}
        />
      );
      if (onRightIconPress) {
        return (
          <Pressable
            onPress={onRightIconPress}
            style={{ marginLeft: gap }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            pointerEvents="box-only"
          >
            {iconElement}
          </Pressable>
        );
      }
      return (
        <View style={{ marginLeft: gap }} pointerEvents="none">
          {iconElement}
        </View>
      );
    }
    return null;
  };

  return {
    paddingV,
    paddingH,
    font,
    icon,
    gap,
    radius,
    borderColor,
    buildLeftIcon,
    buildRightIcon,
    height,
  };
};
