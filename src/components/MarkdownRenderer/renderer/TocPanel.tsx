import React from 'react';
import { Animated } from 'react-native';
import * as S from '../MarkdownRenderer.styles';
import type { Block } from '../types/MarkdownRenderer.types';

type HeadingBlock = Extract<Block, { type: 'heading' }>;

type TocPanelProps = {
  toc: HeadingBlock[];
  activeId: string | null;
  onItemPress: (id: string) => void;
  translateX: Animated.AnimatedInterpolation<number>;
  isOpen: boolean;
  onToggle: () => void;
};

/**
 * 우측에서 슬라이드되는 목차 UI 컴포넌트
 * - 부모에서 계산된 translateX, isOpen, onToggle을 받아서 렌더링만 담당
 */
export default function TocPanel({
  toc,
  activeId,
  onItemPress,
  translateX,
  isOpen,
  onToggle,
}: TocPanelProps) {
  return (
    <S.FloatingWrap pointerEvents="box-none">
      <Animated.View
        pointerEvents="auto"
        style={{ transform: [{ translateX }] }}
      >
        <S.TocPanelWrap>
          <S.TocPanel>
            {toc.map((h) => {
              const isActive = activeId === h.id;
              const TextComp = isActive ? S.TocTextActive : S.TocText;
              return (
                <S.TocItem key={h.id} onPress={() => onItemPress(h.id)}>
                  <TextComp style={{ marginLeft: (h.level - 1) * 8 }}>
                    {h.text}
                  </TextComp>
                </S.TocItem>
              );
            })}
          </S.TocPanel>

          <S.Grip onPress={onToggle}>
            <S.GripIcon>{isOpen ? '›' : '‹'}</S.GripIcon>
          </S.Grip>
        </S.TocPanelWrap>
      </Animated.View>
    </S.FloatingWrap>
  );
}
