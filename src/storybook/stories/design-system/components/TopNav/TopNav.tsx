import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 24,
          backgroundColor: theme.colors.Neutral.N0,
        }}
      >
        <Image
          source={require('@src/assets/images/Logo.png')}
          style={{
            width: 106,
            height: 24,
            objectFit: 'contain',
          }}
        />
      </SafeAreaView>
    );
  }

  if (rightIconName && !leftIconName) {
    return (
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={{ backgroundColor: theme.colors.Neutral.N0 }}
      >
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
              style={[
                { color: theme.colors.Neutral.N600 },
                theme.typography.H3,
              ]}
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
      </SafeAreaView>
    );
  }

  if (leftIconName && !rightIconName) {
    return (
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={{ backgroundColor: theme.colors.Neutral.N0 }}
      >
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
              style={[
                { color: theme.colors.Neutral.N600 },
                theme.typography.H3,
              ]}
            >
              {title}
            </Text>
          </View>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
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
    </SafeAreaView>
  );
}
