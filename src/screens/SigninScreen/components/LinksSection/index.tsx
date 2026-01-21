import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@src/navigation/navigation.types';
import * as S from './LinksSection.styled';

export default function LinksSection() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <S.LinksContainer>
      <Pressable onPress={() => {}}>
        <S.LinkText>아이디</S.LinkText>
      </Pressable>
      <S.Divider />
      <Pressable onPress={() => {}}>
        <S.LinkText>비밀번호 찾기</S.LinkText>
      </Pressable>
      <S.Divider />
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <S.LinkText>회원가입</S.LinkText>
      </Pressable>
    </S.LinksContainer>
  );
}
