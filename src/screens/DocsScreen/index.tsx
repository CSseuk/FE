import React, { useMemo, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import * as S from './DocsScreen.styles';
import { SUBJECTS } from '@constants/subject';
import { useTheme } from '@emotion/react';
import type { Subject } from '@src/types/subject';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DocsStackParamList } from '@src/navigation/navigation.types';

export default function DocsScreen() {
  const theme = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<DocsStackParamList, 'DocsMain'>>();

  // colors 주입해서 실제 배열 확보
  const subjects: Subject[] = useMemo(() => SUBJECTS(theme.colors), [theme]);

  const [activeId, setActiveId] = useState<number>(subjects[0]?.id ?? 1);
  const active = useMemo(
    () => subjects.find((s) => s.id === activeId) ?? subjects[0],
    [subjects, activeId]
  );

  const handleSelect = useCallback((id: number) => setActiveId(id), []);

  const handlePressItem = useCallback(
    (title: string) => {
      navigation.navigate('DocsDetail', {
        quizType: active.type,
        title,
      });
    },
    [navigation, active.type]
  );

  return (
    <S.Wrapper>
      <S.Title>
        필요한 개념을 <S.Highlight>쓱</S.Highlight> 확인해 보세요.
      </S.Title>

      <S.ContentContainer>
        {/* 좌측 목차 */}
        <S.IndexContainer>
          <S.IndexScroll>
            {subjects.map((s) => {
              const isActive = s.id === activeId;
              return (
                <S.IndexItem
                  key={s.id}
                  active={isActive}
                  onPress={() => handleSelect(s.id)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isActive }}
                >
                  <S.IndexLabel>{s.title}</S.IndexLabel>
                </S.IndexItem>
              );
            })}
          </S.IndexScroll>
        </S.IndexContainer>

        {/* 우측 상세 */}
        <S.DetailContainer>
          <S.DetailHeader>
            <Image source={active.logo} style={{ width: 35, height: 35 }} />
            <S.DetailTitle style={{ color: active.Colors }}>
              {active.title}
            </S.DetailTitle>
          </S.DetailHeader>

          <S.ItemScroll showsVerticalScrollIndicator={false}>
            {active.subtitle.map((label, idx) => (
              <S.ItemRow
                key={`${active.id}-${idx}`}
                onPress={() => handlePressItem(label)}
              >
                <S.ItemLeft>
                  <S.ItemLabel>{label}</S.ItemLabel>
                </S.ItemLeft>
                <Image
                  source={require('@src/assets/images/rArrow_24_Default.png')}
                  style={{ width: 24, height: 24 }}
                />
              </S.ItemRow>
            ))}
          </S.ItemScroll>
        </S.DetailContainer>
      </S.ContentContainer>
    </S.Wrapper>
  );
}
