import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '@src/navigation/RootNavigator';
import { ThemeProvider } from '@emotion/react';
import Toast from 'react-native-toast-message';
import theme from '@styles/theme';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';

const SHOW_SB = process.env.EXPO_PUBLIC_STORYBOOK === '1';
const StorybookUIRoot = SHOW_SB ? require('./.storybook').default : null;

export default function App() {
  // 여기에 실제 파일 경로/이름 맞춰주세요
  const [fontsLoaded] = useFonts({
    'Pretendard-Black': require('./src/assets/fonts/Pretendard-Black.ttf'),
    'Pretendard-Bold': require('./src/assets/fonts/Pretendard-Bold.ttf'),
    'Pretendard-ExtraBold': require('./src/assets/fonts/Pretendard-ExtraBold.ttf'),
    'Pretendard-ExtraLight': require('./src/assets/fonts/Pretendard-ExtraLight.ttf'),
    'Pretendard-Light': require('./src/assets/fonts/Pretendard-Light.ttf'),
    'Pretendard-Medium': require('./src/assets/fonts/Pretendard-Medium.ttf'),
    'Pretendard-Regular': require('./src/assets/fonts/Pretendard-Regular.ttf'),
    'Pretendard-SemiBold': require('./src/assets/fonts/Pretendard-SemiBold.ttf'),
    'Pretendard-Thin': require('./src/assets/fonts/Pretendard-Thin.ttf'),
  });

  // 폰트 아직이면 간단 로더
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  // 스토리북 켰을 때
  if (SHOW_SB && StorybookUIRoot) {
    return <StorybookUIRoot />;
  }

  // 앱 UI
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
        <Toast />
      </NavigationContainer>
    </ThemeProvider>
  );
}
