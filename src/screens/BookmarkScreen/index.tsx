import { useState, useCallback, useMemo } from 'react';
import * as S from './BookmarkScreen.styles';

import { LabelFilter, QBox } from '@design-system/index';
import { FlatList, ScrollView } from 'react-native';

import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import type {
  TabParamList,
  HomeStackParamList,
} from '@src/navigation/navigation.types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { QUIZLIST_DB } from '@screens/QuizListScreen/mocks/QuizListScreen.mock';

import type { ChipKind } from '@design-system/LabelFilter/LabelFilter';

type Nav = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Bookmark'>,
  NativeStackNavigationProp<HomeStackParamList>
>;
export default function BookmarkScreen() {
  const navigation = useNavigation<Nav>();

  const data = QUIZLIST_DB[0];
  const [list, setList] = useState(data.QuizListItem);
  const [selected, setSelected] = useState<ChipKind>('all');

  const onToggleBookmark = useCallback((id: number) => {
    setList((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, isBookmarked: !q.isBookmarked } : q
      )
    );
  }, []);

  // 북마크 + 라벨 필터
  const filtered = useMemo(() => {
    return list.filter((item) => {
      if (!item.isBookmarked) return false; // 북마크만
      if (selected === 'all') return true;
      return item.type === selected;
    });
  }, [list, selected]);

  const renderItem = useCallback(
    ({ item }: { item: (typeof list)[number] }) => (
      <QBox
        Section={item.type}
        title={item.title}
        description={item.description}
        isLabeled={true}
        isSolved={item.isSolved}
        isBookmarked={item.isBookmarked ? 'true' : 'false'}
        onToggleBookmark={() => onToggleBookmark(item.id)}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'QuizSolve',
            params: { quizId: item.id, quizType: item.type },
          })
        }
      />
    ),
    [navigation, onToggleBookmark]
  );

  const Separator = useCallback(() => <S.Separator />, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          복습을 위한{'\n'}나만의 <S.DetailText>북마크 리스트</S.DetailText>
          예요.
        </S.Title>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            paddingVertical: 15,
          }}
        >
          <LabelFilter currentSelected={selected} onChange={setSelected} />
        </ScrollView>

        <FlatList
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
          data={filtered}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={Separator}
          renderItem={renderItem}
          ListEmptyComponent={
            <S.EmptyText>선택한 조건의 북마크가 없어요.</S.EmptyText>
          }
        />
      </S.Container>
    </S.Wrapper>
  );
}
