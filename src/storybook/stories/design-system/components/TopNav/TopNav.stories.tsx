import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View, Alert } from 'react-native';
import theme from '@styles/theme';
import TopNav from './TopNav';

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <View
      style={{ flex: 1, padding: 16, backgroundColor: theme.colors.Neutral.N0 }}
    >
      <Story />
    </View>
  </ThemeProvider>
);

storiesOf('Components/TopNav', module)
  .addDecorator(withTheme)

  // 1) 로고만
  .add('Logo', () => <TopNav Logo title="홈" />)

  // 2) 타이틀 + 왼쪽 아이콘
  .add('Title + Left Icon', () => (
    <TopNav
      Logo={false}
      title="뒤로가기"
      leftIconName="chevron-left"
      onLeftPress={() => Alert.alert('Left icon pressed')}
    />
  ))

  // 3) 타이틀 + 오른쪽 아이콘
  .add('Title + Right Icon', () => (
    <TopNav
      Logo={false}
      title="설정"
      rightIconName="settings"
      onRightPress={() => Alert.alert('Right icon pressed')}
    />
  ))

  // 4) 양쪽 아이콘 + 타이틀 (가장 흔한 레이아웃)
  .add('Left + Title + Right', () => (
    <TopNav
      Logo={false}
      title="알림"
      leftIconName="chevron-left"
      rightIconName="bell"
      onLeftPress={() => Alert.alert('Back')}
      onRightPress={() => Alert.alert('Notifications')}
    />
  ));
