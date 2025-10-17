import React, { useMemo, useCallback } from 'react';
import { Pressable, Image } from 'react-native';
import { useTheme } from '@emotion/react';
import * as S from './QBox.styles';
import type { QBoxProps, StatusMeta } from './qbox.types';
import { SOLVE_STATES, ICONS, BOOKMARK_HITSLOP } from './qbox.constants';

import { Label } from '../LabelFilter/LabelFilter';

export default function QBox({
  Section,
  title,
  isLabeled = true,
  description,
  isSolved = SOLVE_STATES.NOT_SOLVED,
  isBookmarked,
  onPress,
  onToggleBookmark,
}: QBoxProps) {
  const theme = useTheme() as any;

  const bookmarked = isBookmarked === 'true';

  const toggleBookmark = useCallback(() => {
    if (onToggleBookmark) {
      onToggleBookmark(!bookmarked);
    }
  }, [bookmarked, onToggleBookmark]);

  // 상태 라벨 & 색상
  const status: StatusMeta = useMemo(() => {
    if (isSolved === SOLVE_STATES.SOLVED)
      return {
        key: SOLVE_STATES.SOLVED,
        color: theme.colors.Blue.B200,
        text: '풀었어요',
        icon: ICONS.checkBlue,
      };
    if (isSolved === SOLVE_STATES.WRONG)
      return {
        key: SOLVE_STATES.WRONG,
        color: theme.colors.Red.R200,
        text: '틀렸어요',
        icon: ICONS.xRed,
      };
    return {
      key: SOLVE_STATES.NOT_SOLVED,
      color: theme.colors.Neutral.N50,
      text: '안풀었어요',
      icon: ICONS.xGray,
    };
  }, [isSolved, theme.colors]);

  return (
    <Pressable onPress={onPress}>
      <S.Card>
        {/* 우상단 북마크 */}

        <S.BookmarkWrap>
          <Pressable
            onPress={(e: any) => {
              if (e?.stopPropagation) e.stopPropagation();
              toggleBookmark();
            }}
            hitSlop={BOOKMARK_HITSLOP}
            accessibilityRole="button"
            accessibilityLabel={bookmarked ? '북마크 해제' : '북마크 추가'}
          >
            <Image
              source={bookmarked ? ICONS.bookmarkOn : ICONS.bookmarkOff}
              style={{ width: 36, height: 36 }}
            />
          </Pressable>
        </S.BookmarkWrap>

        {/* 상단 라벨 */}
        {Section && isLabeled ? <Label kind={Section as any} active /> : null}

        {/* 제목 */}
        {!!title && <S.Title numberOfLines={2}>{title}</S.Title>}

        {/* 설명 */}
        {!!description && <S.Desc numberOfLines={2}>{description}</S.Desc>}

        {/* 하단 상태 */}
        <S.StatusRow>
          <S.StatusInner>
            <Image source={status.icon} style={{ width: 16, height: 16 }} />
            <S.StatusText style={{ color: status.color }}>
              {status.text}
            </S.StatusText>
          </S.StatusInner>
        </S.StatusRow>
      </S.Card>
    </Pressable>
  );
}
