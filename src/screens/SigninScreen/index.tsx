import { InputLabel, Button } from '@design-system/index';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@src/navigation/navigation.types';
import { useState } from 'react';
import { Image } from 'react-native';

import LinksSection from './components/LinksSection';
import SocialLoginSection from './components/SocialLoginSection';
import * as S from './SigninScreen.styles';

export default function SigninScreen() {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    navigation.reset({ routes: [{ name: 'Tabs' }] });
  };

  return (
    <S.SafeWrapper>
      <S.Wrapper>
        <S.Heading>
          <S.AppBox colors={['#99DCFE', '#6189FF']}>
            <Image
              source={require('@src/assets/images/Logo_white.png')}
              style={{ width: 22.11, height: 24.18 }}
              resizeMode="contain"
              accessibilityLabel="CSseuk logo"
            />
          </S.AppBox>
          <S.Title>
            CS 공부, 이제 퀴즈처럼 가볍게 {'\n'}
            <S.HighlightText>쓱</S.HighlightText> 풀어보세요
          </S.Title>
        </S.Heading>
        <S.LoginContainer>
          <S.InputContainer>
            <InputLabel
              size="L"
              placeholder="아이디 입력"
              value={id}
              onChange={setId}
            />
            <InputLabel
              size="L"
              placeholder="비밀번호 입력"
              value={password}
              onChange={setPassword}
              rightIconName={isPasswordVisible ? 'eye' : 'eye-off'}
              secureTextEntry={!isPasswordVisible}
              onRightIconPress={togglePasswordVisibility}
            />
          </S.InputContainer>
          <Button title="로그인" onPress={handleLogin} size="L" />
          <LinksSection />
          <SocialLoginSection />
        </S.LoginContainer>
      </S.Wrapper>
    </S.SafeWrapper>
  );
}
