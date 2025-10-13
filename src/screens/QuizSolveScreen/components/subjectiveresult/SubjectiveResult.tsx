import * as S from './SubjectiveResult.styles';
import TopQuiz from '../topquiz/TopQuiz';
import AnswerBox from '../answerbox/AnswerBox';
import { InputLabel } from '@design-system/index';

type SubjectiveResultProps = {
  quizId: string;
  title: string;
  prompt: string;
  userAnswer: string;
  explanation?: string;
  correctAnswer?: string;
};

export default function SubjectiveResult({
  quizId,
  title,
  prompt,
  userAnswer,
  explanation,
  correctAnswer,
}: SubjectiveResultProps) {
  return (
    <S.Wrapper>
      <TopQuiz quizId={quizId} title={title} prompt={prompt} />
      <AnswerBox userAnswer={correctAnswer} explanation={explanation} />
      <InputLabel
        label="입력한 답안"
        placeholder={userAnswer}
        value={userAnswer}
        disabled
        readOnly
      />
    </S.Wrapper>
  );
}
