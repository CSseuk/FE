// FolderBtn.stories.tsx  (storiesOf 버전)
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ThemeProvider } from '@emotion/react';
import { View, Alert } from 'react-native';
import theme from '@styles/theme';
import FolderBtn from './FolderBtn';
import type { Subject } from './folderBtn.types';

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <View
      style={{ flex: 1, padding: 16, backgroundColor: theme.colors.Neutral.N0 }}
    >
      <Story />
    </View>
  </ThemeProvider>
);

storiesOf('Components/FolderBtn', module)
  .addDecorator(withTheme)

  // 단일 선택
  .add('SingleSelect', () => {
    const [selectedId, setSelectedId] = React.useState<number | null>(null);
    return (
      <FolderBtn
        selectedId={selectedId}
        onSelect={(s: Subject) =>
          setSelectedId((prev) => (prev === s.id ? null : s.id))
        }
        onPressSubject={(s) => console.log('pressed:', s.id, s.title)}
      />
    );
  })

  // 클릭 이벤트만
  .add('ClickOnly', () => (
    <FolderBtn
      selectedId={null}
      onSelect={() => {}}
      onPressSubject={(s: Subject) => {
        switch (s.id) {
          case 1:
            Alert.alert('이동', '자료구조 페이지로!');
            break;
          case 2:
            Alert.alert('이동', '알고리즘 페이지로!');
            break;
          default:
            Alert.alert('이동', `${s.title} 페이지로!`);
        }
      }}
    />
  ));
