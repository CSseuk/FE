import type { NavigatorScreenParams } from '@react-navigation/native';
import type { QuizType } from '@src/types/quiz';

export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  Tabs: undefined;
  Detail: { id: number };
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Bookmark: undefined;
  Docs: undefined;
  Mypage: undefined;
};

export type HomeStackParamList = {
  HomeMain: undefined;
  QuizList: { quizType?: QuizType } | undefined;
  QuizSolve: { quizId: number; quizType: QuizType } | undefined;
};

export type BookmarkStackParamList = {
  BookmarkMain: undefined;
};

export type DocsStackParamList = {
  DocsMain: undefined;
  DocsDetail: { quizType: QuizType; title: string } | undefined;
};

export type MypageStackParamList = {
  MypageMain: undefined;
};
