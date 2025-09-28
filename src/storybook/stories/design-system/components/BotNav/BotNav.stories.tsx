// src/storybook/stories/design-system/components/BotNav/BotNav.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, ScrollView, Text, SafeAreaView, Platform } from 'react-native';
import { ThemeProvider } from '@emotion/react';

import BotNav from './BotNav';
import theme from '@styles/theme';

// 공통 데코레이터 (실제 테마 적용 + 바텀에 고정 배치)
const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.Neutral.N10 }}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Story />
      </View>
    </SafeAreaView>
  </ThemeProvider>
);

// 섹션 타이틀 컴포넌트 (Button.column 감성)
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={{ marginBottom: 24, paddingHorizontal: 16 }}>
    <Text style={[theme.typography.Body2, { marginBottom: 8 }]}>{title}</Text>
    {children}
  </View>
);

// 1) 기본: 바텀에 고정된 BotNav만 보여주기 (탭 눌러가며 확인)
const Basic = () => (
  <View style={{ alignSelf: 'stretch' }}>
    <BotNav />
  </View>
);

// 2) 다양한 배경에서 그림자/대비 확인
const BackgroundCases = () => {
  const cases = [
    { name: 'App BG (N10)', color: theme.colors.Neutral.N10 },
    { name: 'White', color: theme.colors.Neutral.N0 },
    { name: 'Dark', color: '#0B0B0C' },
  ];
  return (
    <ScrollView>
      {cases.map((c) => (
        <Section key={c.name} title={`Background: ${c.name}`}>
          <View
            style={{
              height: 180,
              backgroundColor: c.color,
              borderRadius: 12,
              overflow: 'hidden',
            }}
          >
            {/* 바텀 고정 느낌을 위해 내부 컨테이너 */}
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <BotNav />
            </View>
          </View>
        </Section>
      ))}
    </ScrollView>
  );
};

// 3) 가짜 콘텐츠 위에 얹어서 실제 레이아웃 느낌 테스트
const WithMockContent = () => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: theme.colors.Neutral.N10,
      }}
    >
      <Text style={[theme.typography.Body1, { marginBottom: 12 }]}>
        스크롤되는 콘텐츠 영역 (mock)
      </Text>
      <View
        style={{
          height: 300,
          borderRadius: 12,
          backgroundColor: theme.colors.Neutral.N0,
          ...(Platform.OS === 'web'
            ? { boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }
            : {
                shadowColor: theme.colors.Black,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.08,
                shadowRadius: 4,
                elevation: 2,
              }),
        }}
      />
    </View>

    {/* 바텀에 BotNav */}
    <BotNav />
  </View>
);

storiesOf('Components/BotNav (column)', module)
  .addDecorator(withTheme)
  .add('Basic - Interactive', () => <Basic />)
  .add('Background cases', () => <BackgroundCases />)
  .add('With mock content', () => <WithMockContent />);
