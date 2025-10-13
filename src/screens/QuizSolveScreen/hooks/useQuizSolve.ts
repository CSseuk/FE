// screens/quizSolve/hooks/useQuizSolve.ts
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '@src/navigation/navigation.types';
import { getQuizDetail } from '../mocks/QuizDetail.mocks';
import type { QuizDetail } from '../types/QuizSolveScreen.types';

type Mode = 'solve' | 'result';

export function useQuizSolve(quizId: string) {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const [loading, setLoading] = React.useState(true);
  const [detail, setDetail] = React.useState<QuizDetail | null>(null);

  // 화면 상태
  const [mode, setMode] = React.useState<Mode>('solve');
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  // 입력 상태
  const [selectedOptionId, setSelectedOptionId] = React.useState(''); // MCQ
  const [subjectiveAnswer, setSubjectiveAnswer] = React.useState(''); // 주관식

  // 결과 상태
  const [isCorrect, setIsCorrect] = React.useState<boolean | undefined>(
    undefined
  );
  const [userAnswer, setUserAnswer] = React.useState<string>('');

  // 문제 로딩
  React.useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      const data = await getQuizDetail(quizId);
      if (!mounted) return;

      setDetail(data);
      // 초기화
      setMode('solve');
      setSelectedOptionId('');
      setSubjectiveAnswer('');
      setIsCorrect(undefined);
      setUserAnswer('');
      setLoading(false);
    })();

    return () => {
      mounted = false;
    };
  }, [quizId]);

  // 버튼 활성 조건
  const isSolveActionEnabled =
    mode === 'solve' &&
    (detail?.kind === 'MCQ'
      ? selectedOptionId.length > 0
      : subjectiveAnswer.trim().length > 0);

  const isResultActionEnabled = mode === 'result';

  // 정답 제출
  const handleSubmitAnswer = React.useCallback(() => {
    if (!detail || mode !== 'solve') return;

    if (detail.kind === 'MCQ') {
      const selectedOption = detail.options?.find(
        (opt) => opt.id === selectedOptionId
      );
      const correct = selectedOptionId === detail.correctOptionId;
      setIsCorrect(correct);
      setUserAnswer(selectedOption?.text ?? ''); // 보기 텍스트로 저장
    } else {
      // 주관식은 채점 로직이 바뀔 수 있으니 여기만 교체하면 됨
      setIsCorrect(undefined); // 결과 페이지에서 정오답 텍스트만, 채점은 후속 이슈에서
      setUserAnswer(subjectiveAnswer);
    }

    setMode('result');
  }, [detail, mode, selectedOptionId, subjectiveAnswer]);

  // 다음(현재는 목록으로 이동)
  const handleNext = React.useCallback(() => {
    if (!detail) return;

    // 다음 문제로 이어가려면 여기서 다음 id 계산/요청
    // 현재는 목록으로 복귀
    navigation.navigate('QuizList', { quizType: detail.type });
  }, [detail, navigation]);

  return {
    // 상태
    loading,
    detail,
    mode,
    isBookmarked,
    selectedOptionId,
    subjectiveAnswer,
    isCorrect,
    userAnswer,

    // 파생 상태
    isSolveActionEnabled,
    isResultActionEnabled,

    // 액션
    setSelectedOptionId,
    setSubjectiveAnswer,
    setIsBookmarked,
    handleSubmitAnswer,
    handleNext,
  };
}
