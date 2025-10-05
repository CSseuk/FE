import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import theme from '@styles/theme';
import CalendarMonth from './CalendarMonth';

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <View style={{ alignItems: 'center', paddingVertical: 20 }}>
      <Story />
    </View>
  </ThemeProvider>
);

// Mock Data (랜덤 카운트 데이터)
const generateRandomCounts = (year: number, month: number) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const map: Record<string, number> = {};
  for (let i = 1; i <= daysInMonth; i++) {
    const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(
      i
    ).padStart(2, '0')}`;
    map[key] = Math.floor(Math.random() * 20); // 0~19 사이 랜덤
  }
  return map;
};

const sampleCounts = generateRandomCounts(2025, 9);

storiesOf('Components/CalendarMonth', module)
  .addDecorator(withTheme)
  .add('Default', () => {
    const today = new Date();
    return (
      <CalendarMonth
        year={today.getFullYear()}
        month={today.getMonth()}
        counts={sampleCounts}
      />
    );
  });
