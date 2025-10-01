import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View } from 'react-native';
import theme from '@styles/theme';
import LabelFilter from './LabelFilter';
import type { QuizType } from '@src/types/quiz';

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <View
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <Story />
    </View>
  </ThemeProvider>
);

const DefaultLabelFilter = () => {
  const [selected, setSelected] = useState<QuizType | 'all'>('all');

  return <LabelFilter currentSelected={selected} onChange={setSelected} />;
};

storiesOf('Components/Filter', module)
  .addDecorator(withTheme)
  .add('Default', () => <DefaultLabelFilter />);
