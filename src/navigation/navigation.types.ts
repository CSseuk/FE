export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Tabs: undefined;
  Detail: { id: number };
  Docs: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type TabParamList = {
  Home: undefined;
  Bookmark: undefined;
  Docs: undefined;
  Mypage: undefined;
};

export type HomeStackParamList = {
  HomeMain: undefined; // 문제풀기 메인
  Quiz: { quizId?: string } | undefined; // 문제풀기 내부 화면
};

export type BookmarkStackParamList = {
  BookmarkMain: undefined;
};

export type DocsStackParamList = {
  DocsMain: undefined;
};

export type MypageStackParamList = {
  MypageMain: undefined;
};
