import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '@emotion/react';
import * as S from './SocialLoginButton.styled';

interface SocialLoginButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  social: 'google' | 'kakao';
  style?: StyleProp<ViewStyle>;
}

export default function SocialLoginButton({
  onPress,
  children,
  social,
  style,
}: SocialLoginButtonProps) {
  const theme = useTheme();

  const backgroundColor =
    social === 'google' ? theme.colors.Neutral.N0 : '#f7e600';
  const borderColor =
    social === 'google' ? theme.colors.Neutral.N40 : '#f7e600';

  return (
    <S.Button
      onPress={onPress}
      style={[
        {
          backgroundColor: backgroundColor,
          borderWidth: borderColor ? 1 : 0,
          borderColor: borderColor,
        },
        style,
      ]}
    >
      {children}
    </S.Button>
  );
}

