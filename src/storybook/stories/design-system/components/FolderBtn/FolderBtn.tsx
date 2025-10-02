import React, { useState } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import { useTheme } from '@emotion/react';

import * as S from './FolderBtn.styled';
import type { FolderBtnProps, Subject } from './folderBtn.types';
import {
  DEFAULT_SUBJECTS,
  SCREEN_PADDING,
  GAP,
  BASE_WIDTH,
} from './folderBtn.constants';

export default function FolderBtn({
  subjects,
  selectedId = null,
  numColumns = 2,
  onSelect,
  onPressSubject,
}: FolderBtnProps) {
  const theme = useTheme() as any;

  const data = React.useMemo(
    () => subjects ?? DEFAULT_SUBJECTS(theme.colors),
    [subjects, theme.colors]
  );

  const { width: winW } = useWindowDimensions();
  const [outerW, setOuterW] = useState(0);

  const onLayout = (e: any) => setOuterW(e.nativeEvent.layout.width);
  const containerW = outerW > 0 ? outerW : winW || 0;

  // 카드 폭 계산
  const usableW = containerW - SCREEN_PADDING * 2 - GAP * (numColumns - 1);
  const cardW = usableW > 0 ? usableW / numColumns : 0;

  // scale (디자인 기준 180px)
  const s = cardW > 0 ? cardW / BASE_WIDTH : 1;

  // 내부 요소 크기
  const TITLE_FZ = Math.max(14, 18 * s);
  const SUB_FZ = Math.max(10, 12 * s);
  const ICON = 35 * s;

  return (
    <S.Container onLayout={onLayout}>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: SCREEN_PADDING }}
        columnWrapperStyle={numColumns > 1 ? { columnGap: GAP } : undefined}
        data={data}
        keyExtractor={(it) => String(it.id)}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <S.CardPressable
            $width={cardW > 0 ? cardW : undefined}
            onPress={() => {
              onSelect?.(item);
              onPressSubject?.(item);
            }}
            accessibilityRole="button"
            accessibilityLabel={`${item.title} 폴더 열기`}
          >
            <S.CardBg
              source={item.image}
              resizeMode="cover"
              imageStyle={{ width: '100%', height: '100%' }}
            >
              {/* 문제 수 뱃지 */}
              <S.BadgeText
                $top={22 * s}
                $right={20 * s}
                $color={item.Colors}
                $fontSize={11 * s}
              >
                {item.count && item.count > 0
                  ? `${item.count > 99 ? '99+' : item.count} 문제`
                  : '문제 없음'}
              </S.BadgeText>

              <S.CardInner $px={16 * s} $py={20 * s}>
                {/* 제목 + 로고 */}
                <S.TitleWrap>
                  <S.TitleText $color={item.Colors} $fz={TITLE_FZ} $mt={16 * s}>
                    {item.title}
                  </S.TitleText>

                  <S.Logo source={item.logo} $size={ICON} $top={30 * s} />
                </S.TitleWrap>

                {/* 서브토픽 */}
                <S.SubList $gap={2 * s}>
                  {item.subtitle.map((line, i) => (
                    <S.SubText
                      key={`${item.id}-${i}`}
                      numberOfLines={1}
                      $color={item.Colors}
                      $fz={SUB_FZ}
                    >
                      • {line}
                    </S.SubText>
                  ))}
                </S.SubList>
              </S.CardInner>
            </S.CardBg>
          </S.CardPressable>
        )}
      />
    </S.Container>
  );
}
