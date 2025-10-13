import * as S from './MCQResult.styles';
import TopQuiz from '../topquiz/TopQuiz';
import AnswerBox from '../answerbox/AnswerBox';

type MCQResultProps = {
  isCorrect: boolean;
  quizId: string;
  title: string;
  prompt: string;
  userAnswer: string;
  explanation?: string;
};

export default function MCQResult({
  isCorrect,
  quizId,
  title,
  prompt,
  userAnswer,
  explanation,
}: MCQResultProps) {
  return (
    <S.Wrapper>
      <TopQuiz quizId={quizId} title={title} prompt={prompt} />
      {isCorrect ? (
        <S.RowCon>
          <S.Image source={require('@assets/images/right_24_Selected.png')} />
          <S.RWText>정답이에요</S.RWText>
        </S.RowCon>
      ) : (
        <S.ColCon>
          <S.RowCon>
            <S.Image source={require('@assets/images/wrong_24_Selected.png')} />
            <S.RWText>오답이에요</S.RWText>
          </S.RowCon>
          <S.SelectAnswer>선택한 답: {userAnswer}</S.SelectAnswer>
        </S.ColCon>
      )}
      <AnswerBox userAnswer={userAnswer} explanation={explanation} />
    </S.Wrapper>
  );
}
