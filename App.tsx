import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from 'navigation/RootNavigator';
import { ThemeProvider } from '@emotion/react';
import Toast from 'react-native-toast-message';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
        <Toast />
      </NavigationContainer>
    </ThemeProvider>
  );
}
