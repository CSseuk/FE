import styled from '@emotion/native';
import { ScrollView } from 'react-native';

export const Wrapper = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.Neutral.N0,
}));

export const Title = styled.Text(({ theme }) => ({
  ...theme.typography.H2,
  color: theme.colors.Neutral.N800,
  paddingHorizontal: 24,
  marginBottom: 36,
}));

export const Highlight = styled.Text(({ theme }) => ({
  color: theme.colors.Blue.B200,
}));

// 좌/우 2칼럼 컨테이너
export const ContentContainer = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'row',
  borderTopColor: theme.colors.Neutral.N40,
  borderTopWidth: 1,
}));

/** 좌측 목차 영역 **/
export const IndexContainer = styled.View(({ theme }) => ({
  width: 120,
  backgroundColor: theme.colors.Blue.B50,
  paddingVertical: 24,
  paddingHorizontal: 8,
}));

export const IndexScroll = styled.ScrollView({
  flexGrow: 0,
}) as unknown as React.ComponentType<React.ComponentProps<typeof ScrollView>>;

export const IndexItem = styled.TouchableOpacity<{ active?: boolean }>(
  ({ active, theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
    backgroundColor: active ? theme.colors.Neutral.N0 : 'transparent',
  })
);

export const IndexLabel = styled.Text(({ theme }) => ({
  ...theme.typography.Button_Small,
  color: theme.colors.Neutral.N400,
}));

/** 우측 상세 영역 **/
export const DetailContainer = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.Neutral.N0,
  borderRadius: 12,
  padding: 24,
}));

export const DetailHeader = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 16,
  gap: 8,
});

export const DetailTitle = styled.Text(({ theme }) => ({
  ...theme.typography.H3,
}));

export const ItemScroll = styled.ScrollView({});

export const ItemRow = styled.TouchableOpacity({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,
});

export const ItemLeft = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

export const ItemLabel = styled.Text(({ theme }) => ({
  ...theme.typography.Body2,
  color: theme.colors.Neutral.N600,
}));
