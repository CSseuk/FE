import React from 'react';
import * as S from './QuizSolveScreen.styles';

import MCQResult from './components/mcqresult/MCQResult';
import MCQView from './components/mcqview/MCQView';
import SubjectiveResult from './components/subjectiveresult/SubjectiveResult';
import SubjectiveView from './components/subjectiveview/SubjectiveView';
import Bottombar from './components/bottombar/Bottombar';

import { ActivityIndicator, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { useQuizSolve } from './hooks/useQuizSolve';
import type { HomeStackParamList } from '@src/navigation/navigation.types';

type QuizSolveRoute = RouteProp<HomeStackParamList, 'QuizSolve'>;

export default function QuizSolveScreen() {
  const route = useRoute<QuizSolveRoute>();
  const quizId = String(route?.params?.quizId) ?? '1';

  const {
    loading,
    detail,
    mode,
    isBookmarked,
    selectedOptionId,
    subjectiveAnswer,
    isCorrect,
    userAnswer,
    isSolveActionEnabled,
    isResultActionEnabled,
    setSelectedOptionId,
    setSubjectiveAnswer,
    handleSubmitAnswer,
    handleNext,
  } = useQuizSolve(quizId);

  if (loading || !detail) {
    return (
      <S.Wrapper>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator />
        </View>
      </S.Wrapper>
    );
  }

  const { kind, title, prompt, explanation, correctAnswer, options } = detail;

  return (
    <S.Wrapper>
      <S.Container>
        {mode === 'result' ? (
          kind === 'MCQ' ? (
            <MCQResult
              isCorrect={isCorrect ?? false}
              quizId={quizId}
              title={title}
              prompt={prompt}
              userAnswer={userAnswer}
              explanation={explanation}
            />
          ) : (
            <SubjectiveResult
              quizId={quizId}
              title={title}
              prompt={prompt}
              correctAnswer={correctAnswer}
              userAnswer={userAnswer}
              explanation={explanation}
            />
          )
        ) : kind === 'MCQ' ? (
          <MCQView
            selectedOption={selectedOptionId}
            onSelectOption={setSelectedOptionId}
            options={detail.options}
            quizId={quizId}
            title={title}
            prompt={prompt}
          />
        ) : (
          <SubjectiveView
            subjectiveAnswer={subjectiveAnswer}
            onChangeSubjectiveAnswer={setSubjectiveAnswer}
            title={title}
            quizId={quizId}
            prompt={prompt}
          />
        )}

        {/* 결과 화면에서 해설 보여주고 싶으면 여기서 공통으로 */}
        {mode === 'result' && explanation ? (
          <View style={{ marginTop: 16 }}>
            {/* 해설 영역 컴포넌트로 분리 가능 */}
            {/* <Explanation text={explanation} /> */}
          </View>
        ) : null}
      </S.Container>

      <Bottombar
        mode={mode}
        onSubmitAnswer={handleSubmitAnswer}
        onNext={handleNext}
        isBookmarked={isBookmarked}
        isActionEnabled={
          mode === 'solve' ? isSolveActionEnabled : isResultActionEnabled
        }
      />
    </S.Wrapper>
  );
}
