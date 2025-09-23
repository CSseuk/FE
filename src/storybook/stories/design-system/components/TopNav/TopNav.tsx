import React from 'react';
import { View, Text, Image } from 'react-native';

import { useTheme } from '@emotion/react';

import { Feather } from '@expo/vector-icons';

type FeatherName = React.ComponentProps<typeof Feather>['name'];

type Props = {
  Logo: boolean;
  title: string;
  leftIconName?: FeatherName;
  rightIconName?: FeatherName;
};

export default function TopNav({
  Logo,
  title,
  leftIconName,
  rightIconName,
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
        <Image source={require('../../../../../assets/images/Logo.svg')} />
      </View>
    );
  }

  if (rightIconName && !leftIconName) {
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
    );
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
        columnGap: 4,
        backgroundColor: theme.colors.Neutral.N0,
      }}
    >
      {leftIconName && (
        <Feather
          name={leftIconName}
          size={24}
          color={theme.colors.Neutral.N600}
        />
      )}
      <Text style={[{ color: theme.colors.Neutral.N600 }, theme.typography.H3]}>
        {title}
      </Text>
    </View>
  );
}
