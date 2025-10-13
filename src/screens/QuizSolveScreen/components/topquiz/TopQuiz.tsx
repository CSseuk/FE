import * as S from './TopQuiz.styles';

type TopQuizProps = {
  quizId: string;
  title: string;
  prompt: string;
};
export default function TopQuiz({ quizId, title, prompt }: TopQuizProps) {
  return (
    <S.Container>
      <S.Title>
        문제{quizId}. {title}
      </S.Title>
      <S.Prompt>{prompt}</S.Prompt>
    </S.Container>
  );
}
