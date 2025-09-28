const theme = {
  colors: {
    Black: '#000000',
    Neutral: {
      N0: '#FFFFFF',
      N10: '#fafbfb',
      N20: '#F5f6f7',
      N30: '#ebedf0',
      N40: '#dfe2e6',
      N50: '#c2c7d0',
      N60: '#b3b9c4',
      N70: '#a6aebb',
      N80: '#98a1b0',
      N90: '#8993a4',
      N100: '#7a8699',
      N200: '#6b788e',
      N300: '#5d6b82',
      N400: '#505f79',
      N500: '#42526d',
      N600: '#354764',
      N700: '#243757',
      N800: '#15294b',
      N900: '#091e42',
    },
    Blue: {
      B50: '#e6f0ff',
      B75: '#96c0ff',
      B100: '#6ba6ff',
      B200: '#2b7fff',
      B300: '#0065ff',
      B400: '#0047b3',
      B500: '#003e9c',
    },
    Red: {
      R50: '#f9e9e6',
      R75: '#e5a696',
      R100: '#da816b',
      R200: '#ca4b2b',
      R300: '#bf2600',
      R400: '#861b00',
      R500: '#751700',
    },
  },

  fontFamily: {
    extrabold: 'Pretendard-ExtraBold',
    bold: 'Pretendard-Bold',
    semibold: 'Pretendard-SemiBold',
    medium: 'Pretendard-Medium',
    regular: 'Pretendard-Regular',
    light: 'Pretendard-Light',
    extralight: 'Pretendard-ExtraLight',
    thin: 'Pretendard-Thin',
    black: 'Pretendard-Black',
  },

  typography: {
    H1: { fontSize: 28, lineHeight: 43, fontFamily: 'Pretendard-SemiBold' },
    H2: { fontSize: 24, lineHeight: 38, fontFamily: 'Pretendard-SemiBold' },
    H3: { fontSize: 18, lineHeight: 29, fontFamily: 'Pretendard-SemiBold' },
    Body1: { fontSize: 18, lineHeight: 21, fontFamily: 'Pretendard-Medium' },
    Body2: { fontSize: 16, lineHeight: 19, fontFamily: 'Pretendard-Medium' },
    Body3: { fontSize: 14, lineHeight: 17, fontFamily: 'Pretendard-Medium' },
    Button_Large: {
      fontSize: 16,
      lineHeight: 19,
      fontFamily: 'Pretendard-SemiBold',
    },
    Button_Medium: {
      fontSize: 14,
      lineHeight: 17,
      fontFamily: 'Pretendard-SemiBold',
    },
    Button_Small: {
      fontSize: 12,
      lineHeight: 14,
      fontFamily: 'Pretendard-SemiBold',
    },
    Caption1: {
      fontSize: 10,
      lineHeight: 12,
      fontFamily: 'Pretendard-Medium',
    },
  },
};

export default theme;
export type ThemeType = typeof theme;
