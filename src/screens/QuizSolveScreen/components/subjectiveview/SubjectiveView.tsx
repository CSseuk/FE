import * as S from './SubjectiveView.styles';
import TopQuiz from '../topquiz/TopQuiz';
import { InputLabel } from '@design-system/index';

type SubjectiveViewProps = {
  subjectiveAnswer: string;
  onChangeSubjectiveAnswer: (text: string) => void;
  quizId: string;
  title: string;
  prompt: string;
};

export default function SubjectiveView({
  subjectiveAnswer,
  onChangeSubjectiveAnswer,
  quizId,
  title,
  prompt,
}: SubjectiveViewProps) {
  return (
    <S.Wrapper>
      <TopQuiz quizId={quizId} title={title} prompt={prompt} />
      <InputLabel
        label="답변 입력"
        value={subjectiveAnswer}
        placeholder="여기에 답변을 입력하세요"
        onChange={onChangeSubjectiveAnswer}
      />
    </S.Wrapper>
  );
}
