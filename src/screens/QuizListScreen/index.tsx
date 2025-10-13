import React from 'react';
import * as S from './QuizListScreen.styles';

import { FlatList } from 'react-native';

import { QBox } from '@design-system/index';

import {
  useRoute,
  type RouteProp,
  useNavigation,
} from '@react-navigation/native';
import type { HomeStackParamList } from '@src/navigation/navigation.types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { QuizType } from '@src/types/quiz';
import SolveCountBox from './components/solvecountbox/SolveCountBox';

import { QUIZLIST_DB } from './mocks/QuizListScreen.mock';

type QuizListRoute = RouteProp<HomeStackParamList, 'QuizList'>;

export default function QuizListScreen() {
  const { params } = useRoute<QuizListRoute>();
  const quizType: QuizType | undefined = params?.quizType;

  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const data = QUIZLIST_DB[0];
  const [list, setList] = React.useState(QUIZLIST_DB[0].QuizListItem);

  const onToggleBookmark = (id: number) => {
    setList((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, isBookmarked: !q.isBookmarked } : q
      )
    );
  };

  return (
    <S.Wrapper>
      <SolveCountBox
        quizType={quizType || 'All'}
        allCount={data.Allcount}
        solveCount={data.SolveCount}
      />
      <S.Container2>
        <FlatList
          style={{ display: 'flex', padding: 24 }}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          data={list}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <S.Separator />}
          renderItem={({ item }) => (
            <QBox
              Section={item.type}
              title={item.title}
              description={item.description}
              isLabeled={false}
              isSolved={item.isSolved}
              isBookmarked={item.isBookmarked ? 'true' : 'false'}
              onToggleBookmark={() => onToggleBookmark(item.id)}
              onPress={() => {
                navigation.navigate('QuizSolve', {
                  quizId: item.id,
                  quizType: quizType as QuizType,
                });
              }}
            />
          )}
        />
      </S.Container2>
    </S.Wrapper>
  );
}
