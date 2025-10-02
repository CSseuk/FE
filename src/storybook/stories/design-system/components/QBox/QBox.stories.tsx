// QBox.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View, Alert } from 'react-native';
import theme from '@styles/theme';
import QBox from './QBox';

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <View
      style={{
        display: 'flex',

        padding: 16,
        backgroundColor: theme.colors.Neutral.N0,
      }}
    >
      <Story />
    </View>
  </ThemeProvider>
);

const baseProps = {
  Section: 'dataStructure',
  title: '문제1. 스택의 기본 연산',
  description:
    '스택에서 TOP, BOTTOM의 2개의 포인터가 있을 때, 한 개의 원소가 삽입되면 어떻게 되는가?',
  onPress: () => Alert.alert('카드 터치'),
  onToggleBookmark: () => Alert.alert('북마크 토글'),
};

storiesOf('Components/QBox', module)
  .addDecorator(withTheme)

  // 기본 (안풀었어요 / 북마크 꺼짐)
  .add('Default • NotSolved', () => {
    const [bm, setBm] = React.useState(false);

    return (
      <QBox
        {...baseProps}
        isSolved="NotSolved"
        isBookmarked={bm ? 'true' : 'false'}
        onToggleBookmark={(next) => setBm(next)}
      />
    );
  })

  // 풀었어요 (파란 체크)
  .add('Solved', () => {
    const [bm, setBm] = React.useState(false);

    return (
      <QBox
        {...baseProps}
        isSolved="Solved"
        isBookmarked={bm ? 'true' : 'false'}
        onToggleBookmark={(next) => setBm(next)}
      />
    );
  })

  // 틀렸어요 (빨간 X)
  .add('Wrong', () => {
    const [bm, setBm] = React.useState(false);

    return (
      <QBox
        {...baseProps}
        isSolved="Wrong"
        isBookmarked={bm ? 'true' : 'false'}
        onToggleBookmark={(next) => setBm(next)}
      />
    );
  })

  // 북마크 켜짐
  .add('Bookmarked', () => {
    const [bm, setBm] = React.useState(false);

    return (
      <QBox
        {...baseProps}
        isSolved="NotSolved"
        isBookmarked={bm ? 'true' : 'false'}
        onToggleBookmark={(next) => setBm(next)}
      />
    );
  })

  // 긴 텍스트 잘림 확인 (2줄 제한)
  .add('Truncation (long title/desc)', () => {
    const [bm, setBm] = React.useState(false);

    return (
      <QBox
        {...baseProps}
        title={
          '문제1. 스택의 기본 연산 - 매우 매우 긴 제목이 들어왔을 때 어디까지 보이고 잘리는지 테스트합니다'
        }
        description={
          '이 설명도 상당히 길어서 두 줄에서 자연스럽게 말줄임 처리되는지 확인하기 위한 더미 텍스트입니다. 실제로는 문제의 배경이나 조건이 길게 들어갈 수 있습니다.'
        }
        isSolved="Solved"
        isBookmarked={bm ? 'true' : 'false'}
      />
    );
  })

  // 리스트로 한 번에 비교
  .add('All variants (list)', () => (
    <View style={{ gap: 12 }}>
      <QBox {...baseProps} isSolved="NotSolved" isBookmarked="false" />
      <QBox {...baseProps} isSolved="Solved" isBookmarked="false" />
      <QBox {...baseProps} isSolved="Wrong" isBookmarked="false" />
      <QBox {...baseProps} isSolved="NotSolved" isBookmarked="true" />
      <QBox
        {...baseProps}
        Section={undefined}
        isSolved="Solved"
        isBookmarked="true"
      />
    </View>
  ));
