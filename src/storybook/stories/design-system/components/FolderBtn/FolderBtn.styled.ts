import styled from '@emotion/native';

export const Container = styled.View({
  flex: 1,
});

export const CardPressable = styled.Pressable<{ $width?: number }>((props) => ({
  width: props.$width ?? 'auto',
  flex: 1,
  elevation: 3,
  marginVertical: 8,
}));

export const CardBg = styled.ImageBackground({
  width: '100%',
  aspectRatio: 1,
  position: 'relative',
});

export const BadgeText = styled.Text<{
  $top: number;
  $right: number;
  $color: string;
  $fontSize: number;
}>(({ $top, $right, $color, $fontSize }) => ({
  position: 'absolute',
  top: $top,
  right: $right,
  color: $color,
  fontSize: $fontSize,
}));

export const CardInner = styled.View<{ $px: number; $py: number }>(
  ({ $px, $py }) => ({
    flex: 1,
    paddingHorizontal: $px,
    paddingVertical: $py,
    justifyContent: 'space-between',
  })
);

export const TitleWrap = styled.View({
  position: 'relative',
});

export const TitleText = styled.Text<{
  $color: string;
  $fz: number;
  $mt: number;
}>(({ $color, $fz, $mt }) => ({
  color: $color,
  fontSize: $fz,
  marginTop: $mt,
}));

export const Logo = styled.Image<{ $size: number; $top: number }>(
  ({ $size, $top }) => ({
    position: 'absolute',
    right: 0,
    top: $top,
    width: $size,
    height: $size,
    resizeMode: 'contain',
  })
);

export const SubList = styled.View<{ $gap: number }>(({ $gap }) => ({
  gap: $gap,
}));

export const SubText = styled.Text<{ $color: string; $fz: number }>(
  ({ $color, $fz }) => ({
    color: $color,
    fontSize: $fz,
  })
);
