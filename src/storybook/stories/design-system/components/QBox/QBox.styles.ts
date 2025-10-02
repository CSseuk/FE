import styled from '@emotion/native';

export const Card = styled.View(({ theme }: any) => ({
  borderRadius: 12,
  backgroundColor: theme.colors.Neutral.N0,
  padding: 16,
  gap: 12,
  shadowOpacity: 0.08,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
}));

export const BookmarkWrap = styled.View({
  position: 'absolute',
  right: 12,
  top: 10,
  flexDirection: 'row',
  alignItems: 'center',
});

export const Title = styled.Text(({ theme }: any) => ({
  color: theme.colors.Neutral.N600,
  ...(theme.typography?.H3 ?? { fontSize: 16, fontWeight: '700' }),
}));

export const Desc = styled.Text(({ theme }: any) => ({
  color: theme.colors.Neutral.N400,
  ...(theme.typography?.Body3 ?? { fontSize: 13 }),
}));

export const StatusRow = styled.View({
  marginTop: 10,
  alignItems: 'flex-end',
});

export const StatusInner = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
});

export const StatusText = styled.Text(({ theme }: any) => ({
  ...(theme.typography?.Button_Small ?? { fontSize: 12, fontWeight: '600' }),
}));
