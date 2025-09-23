// components/TopNav/TopNav.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
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

  // 1) 로고만 보여주는 케이스
  .add('Logo', () => <TopNav Logo title="홈" />)

  // 2) 로고 없이: 왼쪽 아이콘 + 타이틀
  .add('Title + Left Icon', () => (
    <TopNav Logo={false} title="뒤로가기" leftIconName="chevron-left" />
  ))

  // 3) 로고 없이: 타이틀 + 오른쪽 아이콘
  .add('Title + Right Icon', () => (
    <TopNav Logo={false} title="설정" rightIconName="chevron-right" />
  ));
