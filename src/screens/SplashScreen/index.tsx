import { useEffect, useRef } from 'react';
import { Image, Animated } from 'react-native';
import * as S from './index.styles';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation<any>();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // 동시에 페이드인 + 스케일 업
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      // 스플래시로 되돌아올 수 없게 초기화
      navigation.reset({ index: 0, routes: [{ name: 'Tabs' }] });
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, navigation]);

  return (
    <S.Container colors={['#99DCFE', '#6189FF']}>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          alignItems: 'center',
        }}
      >
        <Image
          source={require('@src/assets/images/Logo_white.png')}
          style={{ width: 100, height: 100 }}
          resizeMode='contain'
          accessibilityLabel='CSseuk logo'
        />
      </Animated.View>
    </S.Container>
  );
}
