import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from 'navigation/RootNavigator';
import { ThemeProvider } from '@emotion/react';
import Toast from 'react-native-toast-message';
import theme from './src/styles/theme';

const SHOW_SB = process.env.EXPO_PUBLIC_STORYBOOK === '1';
const StorybookUIRoot = SHOW_SB ? require('./.storybook').default : null;

export default function App() {
  if (SHOW_SB && StorybookUIRoot) {
    return <StorybookUIRoot />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
        <Toast />
      </NavigationContainer>
    </ThemeProvider>
  );
}
