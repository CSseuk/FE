import styled from '@emotion/native';

export const Wrapper = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.Neutral.N0,
  position: 'absolute',
  bottom: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  padding: 16,
  gap: 16,
}));

export const BookMark = styled.View(({ theme }) => ({
  position: 'relative',
  width: 52,
  height: 52,
  borderRadius: 8,
  boxShadow: '0 0 4px 0 rgba(0,0,0,0.25)',
  cursor: 'pointer',
}));

export const Image = styled.Image(() => ({
  position: 'absolute',
  width: 24,
  height: 24,
  left: '50%',
  top: '50%',
  transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
}));
