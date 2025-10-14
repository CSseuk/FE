import React from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  Pressable,
} from 'react-native';
import { useTheme } from '@emotion/react';

import { Feather } from '@expo/vector-icons';

type FeatherName = React.ComponentProps<typeof Feather>['name'];

type size = 'S' | 'M' | 'L';
type Status = 'Default' | 'Pressed' | 'Disabled';
type Variant = 'Primary' | 'Tertiary';

type Triplet = {
  bg?: string;
  border?: string;
  color?: string;
};

type Props = {
  title: string;
  onPress?: () => void;
  size?: size;
  status?: Status;
  button?: Variant;
  instance?: string;
  leftIconName?: FeatherName;
  rightIconName?: FeatherName;
  leftIconNode?: React.ReactNode;
  rightIconNode?: React.ReactNode;

  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  visualDisabled?: boolean;
};

export default function Button({
  title,
  onPress,
  size = 'S',
  status = 'Default',
  button = 'Primary',
  instance,
  leftIconName,
  rightIconName,
  leftIconNode = '',
  rightIconNode,
  loading = false,
  style,
  visualDisabled,
}: Props) {
  const theme = useTheme();

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
      paddingV: 10,
      paddingH: 4,
      font: theme.typography.Button_Small,
      icon: 16,
      gap: 4,
      radius: 6,
    },
    M: {
      paddingV: 14,
      paddingH: 8,
      font: theme.typography.Button_Medium,
      icon: 20,
      gap: 4,
      radius: 8,
    },
    L: {
      paddingV: 18,
      paddingH: 12,
      font: theme.typography.Button_Large,
      icon: 24,
      gap: 4,
      radius: 12,
    },
  };

  const buttonStyleMap: Record<Variant, Record<Status, Triplet>> = {
    Primary: {
      Default: {
        bg: theme.colors.Blue.B200,
        border: theme.colors.Blue.B200,
        color: theme.colors.Neutral.N0,
      },
      Pressed: {
        bg: theme.colors.Blue.B300,
        border: theme.colors.Blue.B300,
        color: theme.colors.Neutral.N0,
      },
      Disabled: {
        bg: theme.colors.Neutral.N40,
        border: theme.colors.Neutral.N40,
        color: theme.colors.Neutral.N0,
      },
    },
    Tertiary: {
      Default: {
        bg: theme.colors.Neutral.N0,
        border: theme.colors.Blue.B200,
        color: theme.colors.Blue.B200,
      },
      Pressed: {
        bg: theme.colors.Blue.B50,
        border: theme.colors.Blue.B200,
        color: theme.colors.Blue.B200,
      },
      Disabled: {
        bg: theme.colors.Neutral.N0,
        border: theme.colors.Neutral.N60,
        color: theme.colors.Neutral.N60,
      },
    },
  };

  const { paddingV, paddingH, font, icon, gap, radius } = sizeMap[size];

  const buildLeftIcon = (color: string) => {
    if (loading) return null;
    if (leftIconNode)
      return <View style={{ marginRight: gap }}>{leftIconNode}</View>;
    if (leftIconName)
      return <Feather name={leftIconName} size={icon} color={color} />;
    return null;
  };

  const buildRightIcon = (color: string) => {
    if (loading) return null;
    if (rightIconNode)
      return <View style={{ marginLeft: gap }}>{rightIconNode}</View>;
    if (rightIconName)
      return <Feather name={rightIconName} size={icon} color={color} />;
    if (instance) {
      return (
        <Image
          source={{ uri: instance }}
          style={{ width: icon, height: icon }}
          resizeMode="contain"
        />
      );
    }
    return null;
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={status === 'Disabled' || loading}
      style={({ pressed }) => {
        const isDisabled = status === 'Disabled' || loading;
        const visual: Status = isDisabled
          ? 'Disabled'
          : visualDisabled
          ? 'Disabled'
          : pressed
          ? 'Pressed'
          : 'Default';
        const triplet = buttonStyleMap[button][visual];

        return [
          {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: triplet.bg,
            borderColor: triplet.border,
            borderWidth: 1,
            borderRadius: radius,
            paddingVertical: paddingV,
            paddingHorizontal: paddingH,
          },
          style,
        ];
      }}
    >
      {({ pressed }) => {
        const isDisabled = status === 'Disabled' || loading;
        const visual: Status = isDisabled
          ? 'Disabled'
          : visualDisabled
          ? 'Disabled'
          : pressed
          ? 'Pressed'
          : 'Default';
        const triplet = buttonStyleMap[button][visual];

        const Left = buildLeftIcon(triplet.color!);
        const Right = buildRightIcon(triplet.color!);

        return loading ? (
          <ActivityIndicator color={triplet.color} />
        ) : (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: gap,
            }}
          >
            {/* 왼쪽 아이콘 (있을 때만) */}
            {Left && (
              <View style={{ position: 'absolute', left: paddingH }}>
                {Left}
              </View>
            )}

            {/* 라벨 */}
            <Text style={[font, { color: triplet.color }]}>{title}</Text>

            {/* 오른쪽 아이콘/이미지 (있을 때만) */}
            {Right && (
              <View style={{ position: 'absolute', right: paddingH }}>
                {Right}
              </View>
            )}
          </View>
        );
      }}
    </Pressable>
  );
}
