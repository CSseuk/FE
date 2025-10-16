import styled from '@emotion/native';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';

export const PANEL_WIDTH = 160;
export const GRIP_WIDTH = 28;

/** 화면 전체 레이아웃 컨테이너 */
export const Container = styled.View({
  flex: 1,
  position: 'relative', // 우측 목차 패널을 absolute로 띄우기 위함
});

export const Scroll = styled.ScrollView({
  flex: 1,
});

/**
 * 우측 슬라이딩 패널
 * - right: -PANEL_WIDTH 로 화면 밖에 위치(닫혀있는 상태)
 * - Animated translateX 로만 슬라이딩 제어
 */
export const FloatingWrap = styled.View(({ theme }) => ({
  position: 'absolute',
  right: -PANEL_WIDTH,
  top: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'flex-end',
  zIndex: 1000,
  shadowColor: theme.colors.Black,
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
}));

export const TocPanelWrap = styled.View(({ theme }) => ({
  width: PANEL_WIDTH,
  backgroundColor: theme.colors.Neutral.N0,
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8,
  overflow: 'hidden',
}));

export const TocPanel = styled.ScrollView({
  paddingVertical: 12,
  paddingHorizontal: 28,
});

/** 패널 여닫는 그립(버튼) */
export const Grip = styled.Pressable({
  position: 'absolute',
  left: 0,
  top: '45%',
  width: GRIP_WIDTH,
  alignItems: 'center',
  justifyContent: 'center',
});

export const GripIcon = styled.Text(({ theme }) => ({
  fontSize: 20,
  color: theme.colors.Neutral.N400,
}));

export const TocItem = styled.Pressable({
  paddingVertical: 3,
});

export const TocText = styled.Text(({ theme }) => ({
  color: theme.colors.Neutral.N100,
  ...theme.typography.Caption1,
}));

export const TocTextActive = styled.Text(({ theme }) => ({
  color: theme.colors.Blue.B200,
  ...theme.typography.Caption1,
}));

export const HStyle = styled.Text(({ theme }) => ({
  color: theme.colors.Blue.B200,
}));

/** 헤딩들 */
export const H1 = styled(HStyle)(({ theme }) => ({
  ...theme.typography.H1,
  marginTop: 16,
  marginBottom: 8,
}));

export const H2 = styled(HStyle)(({ theme }) => ({
  ...theme.typography.H2,
  marginTop: 16,
  marginBottom: 8,
}));

export const H3 = styled(HStyle)(({ theme }) => ({
  ...theme.typography.H3,
  marginTop: 14,
  marginBottom: 6,
}));

/** 본문/리스트 */
export const Paragraph = styled.Text(({ theme }) => ({
  ...theme.typography.Body2,
  color: theme.colors.Neutral.N400,
  marginBottom: 10,
}));

export const List = styled.View({
  gap: 6,
  marginBottom: 10,
});

export const ListItem = styled.View({
  flexDirection: 'row',
  alignItems: 'flex-start',
});

export const ListBullet = styled.Text({
  width: 18,
});

export const ListText = styled.Text({
  flex: 1,
});

/** 코드 블록 */
export const CodeBox = styled.View({
  backgroundColor: '#0B1220',
  borderRadius: 8,
  padding: 10,
  marginVertical: 10,
});

export const CodeText = styled.Text(({ theme }) => ({
  color: theme.colors.Neutral.N20,
  fontFamily: 'Courier',
  lineHeight: 16,
}));

export const CodeInline = styled.Text(({ theme }) => ({
  fontFamily: 'Courier',
  backgroundColor: theme.colors.Neutral.N30,
  paddingHorizontal: 4,
  paddingVertical: 2,
  borderRadius: 4,
}));

/** 인용문 */
export const Quote = styled.View(({ theme }) => ({
  borderLeftWidth: 3,
  borderLeftColor: theme.colors.Neutral.N30,
  paddingLeft: 10,
  marginVertical: 8,
}));

export const QuoteText = styled.Text(({ theme }) => ({
  fontStyle: 'italic',
  color: theme.colors.Neutral.N300,
}));

/** 구분선 */
export const Hr = styled.View(({ theme }) => ({
  height: 2,
  backgroundColor: theme.colors.Neutral.N20,
  marginVertical: 12,
}));

/** 이미지 */
export const ImgWrap = styled.View({
  alignItems: 'center',
  marginVertical: 10,
  width: '100%',
});

const StyledImage = styled.Image({
  width: '100%',
  borderRadius: 8,
  resizeMode: 'contain',
});

interface ImgProps {
  source: string;
}

export const Img = ({ source }: ImgProps) => {
  const [ratio, setRatio] = useState(1); // 기본 비율 1:1

  useEffect(() => {
    Image.getSize(source, (width, height) => setRatio(width / height));
  }, [source]);

  return (
    <StyledImage source={{ uri: source }} style={{ aspectRatio: ratio }} />
  );
};

/** 인라인 스타일 */
export const Bold = styled.Text({
  fontWeight: '700',
});

export const Link = styled.Text(({ theme }) => ({
  color: theme.colors.Blue.B500,
  textDecorationLine: 'underline',
}));

export const Strike = styled.Text({
  textDecorationLine: 'line-through',
});

export const Table = styled.View(({ theme }) => ({
  borderWidth: 1,
  borderColor: theme.colors.Neutral.N30,
  overflow: 'hidden',
  marginVertical: 12,
}));

export const TableHeader = styled.View(({ theme }) => ({
  flexDirection: 'row',
  backgroundColor: theme.colors.Neutral.N20,
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.Neutral.N30,
}));

export const TableHeaderCell = styled.View({
  flex: 1,
  paddingVertical: 8,
  paddingHorizontal: 10,
});

export const TableText = styled.Text(({ theme }) => ({
  color: theme.colors.Neutral.N400,
}));

export const TableRow = styled.View(({ theme }) => ({
  flexDirection: 'row',
  borderTopWidth: 1,
  borderTopColor: theme.colors.Neutral.N30,
}));

export const TableCell = styled.View({
  flex: 1,
  paddingVertical: 8,
  paddingHorizontal: 10,
});
