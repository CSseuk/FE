export const safeGoBack = (navigation: any, fallback?: () => void) => {
  if (navigation.canGoBack()) {
    navigation.goBack();
    return;
  }
  const parent = navigation.getParent?.();
  if (parent?.canGoBack?.()) {
    parent.goBack();
    return;
  }
  // 최종 폴백: 홈스택의 루트로 보내기
  if (fallback) {
    fallback();
    return;
  }
  navigation.navigate('HomeMain'); // 홈스택 루트 이름
};
