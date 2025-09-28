import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { useTheme } from '@emotion/react';

import { Feather } from '@expo/vector-icons';

type FeatherName = React.ComponentProps<typeof Feather>['name'];

type Props = {
  Logo: boolean;
  title: string;
  leftIconName?: FeatherName;
  rightIconName?: FeatherName;
  onLeftPress?: () => void;
  onRightPress?: () => void;
};

export default function TopNav({
  Logo,
  title,
  leftIconName,
  rightIconName,
  onLeftPress,
  onRightPress,
}: Props) {
  const theme = useTheme();

  if (Logo) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 24,
          backgroundColor: theme.colors.Neutral.N0,
        }}
      >
        <Image source={require('@src/assets/images/Logo.png')} />
      </View>
    );
  }

  if (rightIconName && !leftIconName) {
    return (
      <Pressable onPress={onRightPress}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 24,
            backgroundColor: theme.colors.Neutral.N0,
          }}
        >
          <Text
            style={[{ color: theme.colors.Neutral.N600 }, theme.typography.H3]}
          >
            {title}
          </Text>
          <Feather
            name={rightIconName}
            size={24}
            color={theme.colors.Neutral.N600}
          />
        </View>
      </Pressable>
    );
  }

  if (leftIconName && !rightIconName) {
    return (
      <Pressable onPress={onLeftPress}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 24,
            columnGap: 4,
            backgroundColor: theme.colors.Neutral.N0,
          }}
        >
          <Feather
            name={leftIconName}
            size={24}
            color={theme.colors.Neutral.N600}
          />
          <Text
            style={[{ color: theme.colors.Neutral.N600 }, theme.typography.H3]}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    );
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 24,
        backgroundColor: theme.colors.Neutral.N0,
      }}
    >
      <Pressable onPress={onLeftPress}>
        <Feather
          name={leftIconName || 'chevron-left'}
          size={24}
          color={theme.colors.Neutral.N600}
        />
      </Pressable>

      <Text style={[{ color: theme.colors.Neutral.N600 }, theme.typography.H3]}>
        {title}
      </Text>

      <Pressable onPress={onRightPress}>
        {rightIconName ? (
          <Feather
            name={rightIconName}
            size={24}
            color={theme.colors.Neutral.N600}
          />
        ) : (
          <View style={{ width: 24, height: 24 }} />
        )}
      </Pressable>
    </View>
  );
}
