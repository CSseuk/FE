import { useMemo, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { PANEL_WIDTH, GRIP_WIDTH } from '../MarkdownRenderer.styles';

/**
 * 우측 목차 패널을 열고 닫는 hook
 * - translateX: 0 → 패널 열린 상태, -(PANEL_WIDTH - GRIP_WIDTH) → 그립만 남기고 숨김
 * isOpen으로 패널 여닫힘 상태 관리
 */
export function useSlidingPanel() {
  const openAnim = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);

  const translateX = useMemo(
    () =>
      openAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -(PANEL_WIDTH - GRIP_WIDTH)],
      }),
    [openAnim]
  );

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
    Animated.spring(openAnim, {
      toValue: (openAnim as any)._value === 1 ? 0 : 1,
      useNativeDriver: true,
      friction: 7,
      tension: 60,
    }).start();
  };

  return { isOpen, translateX, togglePanel };
}
