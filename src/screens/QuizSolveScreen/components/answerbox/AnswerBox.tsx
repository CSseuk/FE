import * as S from './AnswerBox.styles';

type AnswerBoxProps = {
  userAnswer?: string;
  explanation?: string;
};

export default function AnswerBox({ userAnswer, explanation }: AnswerBoxProps) {
  return (
    <S.Wrapper>
      <S.AnswerTitle>정답: {userAnswer}</S.AnswerTitle>
      <S.AnswerContext>{explanation}</S.AnswerContext>
    </S.Wrapper>
  );
}
