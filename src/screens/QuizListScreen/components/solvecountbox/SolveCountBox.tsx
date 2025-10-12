import * as S from './SolveCountBox.styles';

import { Label } from '@design-system/LabelFilter/LabelFilter';

type SolveCountBoxProps = {
  quizType: string;
  allCount: number;
  solveCount: number;
};

export default function SolveCountBox({
  quizType,
  allCount,
  solveCount,
}: SolveCountBoxProps) {
  const percent = allCount > 0 ? Math.round((solveCount / allCount) * 100) : 0;
  return (
    <S.Container1>
      <Label kind={quizType as any} active />

      <S.SolveCountContainer>
        <S.SolveCount>풀이한 문제</S.SolveCount>
        <S.SolveCountBox>
          <S.SolveCountValue>
            {solveCount} / {allCount}
          </S.SolveCountValue>
          <S.SolveCountCol>
            <S.SolveCountPercent>{percent}%</S.SolveCountPercent>
            <S.SolveCountBox>
              <S.SolveCountPercentLine />
              <S.SolveCountPercentLine2 style={{ width: `${percent}%` }} />
            </S.SolveCountBox>
          </S.SolveCountCol>
        </S.SolveCountBox>
      </S.SolveCountContainer>
    </S.Container1>
  );
}
