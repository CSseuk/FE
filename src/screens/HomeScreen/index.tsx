import { View, Text } from 'react-native';
import * as S from './HomeScreen.styled';

import { FolderBtn } from '@design-system/index';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '@src/navigation/navigation.types';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          어떤 분야의 문제를 <S.DetailText>쓱</S.DetailText> 풀어볼까요?
        </S.Title>
        <FolderBtn
          numColumns={2}
          onPressSubject={(s) => {
            navigation.navigate('QuizList', { quizType: s.type });
          }}
        />
      </S.Container>
    </S.Wrapper>
  );
}
