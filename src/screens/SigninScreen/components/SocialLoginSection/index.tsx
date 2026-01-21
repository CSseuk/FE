import { Image } from 'react-native';
import * as S from './SocialLoginSection.styled';
import SocialLoginButton from '../SocialLoginButton';

export default function SocialLoginSection() {
  return (
    <S.Container>
      <S.SNSDivider>
        <S.SNSDividerLine />
        <S.SNSDividerText>SNS 계정으로 로그인</S.SNSDividerText>
        <S.SNSDividerLine />
      </S.SNSDivider>
      <S.SocialLoginContainer>
        <SocialLoginButton onPress={() => {}} social="kakao">
          <Image
            source={require('@src/assets/images/Logo_Kakao.png')}
            style={{ width: 19.2, height: 19.2 }}
            resizeMode="contain"
            accessibilityLabel="Kakao login"
          />
        </SocialLoginButton>
        <SocialLoginButton onPress={() => {}} social="google">
          <Image
            source={require('@src/assets/images/Logo_Google.png')}
            style={{ width: 19.2, height: 19.2 }}
            resizeMode="contain"
            accessibilityLabel="Google login"
          />
        </SocialLoginButton>
      </S.SocialLoginContainer>
    </S.Container>
  );
}

