import { useMemo, useRef, useState } from 'react';
import type { ScrollView } from 'react-native';
import type { Block } from '../MarkdownRenderer.types';

/**
 * 문서에서 heading으로 목차를 만들고,
 * 각 heading의 y 좌표(앵커)를 기록해 스크롤 이동을 처리하는 hook
 */
export function useToc(blocks: Block[]) {
  const [anchorY, setAnchorY] = useState<Record<string, number>>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const scrollRef = useRef<ScrollView | null>(null);

  const toc = useMemo(
    () =>
      blocks.filter(
        (b): b is Extract<Block, { type: 'heading' }> =>
          b.type === 'heading' && b.level >= 1 && b.level <= 3
      ),
    [blocks]
  );

  const recordAnchor = (id: string) => (e: any) => {
    const y = e.nativeEvent.layout.y as number;
    setAnchorY((prev) => ({ ...prev, [id]: y }));
  };

  const handleTocPress = (id: string) => {
    const y = anchorY[id] ?? 0;
    scrollRef.current?.scrollTo({ y: Math.max(0, y - 8), animated: true });
    setActiveId(id);
  };

  /**
   * 스크롤 시 현재 섹션 추적
   * - 현재 y보다 작거나 같은 앵커들 중 가장 아래쪽 id 활성화
   */
  const onScroll = (y: number) => {
    const target = y;
    const entries = Object.entries(anchorY).sort((a, b) => a[1] - b[1]);
    let current: string | null = null;
    for (const [id, ay] of entries) {
      if (ay <= target) current = id;
      else break;
    }
    if (current && current !== activeId) setActiveId(current);
  };

  return {
    toc,
    recordAnchor,
    handleTocPress,
    onScroll,
    activeId,
    setActiveId,
    anchorY,
    scrollRef,
  };
}
