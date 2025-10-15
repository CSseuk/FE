import React, { useMemo } from 'react';
import { Linking, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import renderBlock from './renderer/renderBlock';
import * as S from './MarkdownRenderer.styles';
import parseBlocks from './parser/parseBlocks';
import { useSlidingPanel } from './hooks/useSlidingPanel';
import TocPanel from './renderer/TocPanel';
import { useToc } from './hooks/useToc';

type MarkdownRendererProps = {
  source: string;
};

export default function MarkdownRenderer({ source }: MarkdownRendererProps) {
  const { isOpen, translateX, togglePanel } = useSlidingPanel();

  // 입력 마크다운을 Block 배열로 변환
  const blocks = useMemo(() => parseBlocks(source), [source]);

  // 목차/앵커/스크롤 관리 훅
  const { toc, recordAnchor, handleTocPress, onScroll, activeId, scrollRef } =
    useToc(blocks);

  // onScroll 이벤트 → y값만 추출해 훅에 전달
  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    onScroll(e.nativeEvent.contentOffset.y);
  };

  // 링크 오픈 핸들러
  const openURL = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <S.Container>
      {/* 우측 목차 */}
      <TocPanel
        toc={toc}
        activeId={activeId}
        onItemPress={handleTocPress}
        translateX={translateX}
        isOpen={isOpen}
        onToggle={togglePanel}
      />

      {/* 본문 */}
      <S.Scroll
        ref={scrollRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {blocks.map((b, idx) => renderBlock(b, idx, recordAnchor, openURL))}
      </S.Scroll>
    </S.Container>
  );
}
