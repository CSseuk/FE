import * as S from './Bottombar.styles';
import { Button } from '@design-system/index';

type BottombarProps = {
  mode: 'solve' | 'result';
  onSubmitAnswer?: () => void;
  onNext?: () => void;
  isBookmarked?: boolean;
  isActionEnabled?: boolean;
};

export default function Bottombar({
  mode,
  onSubmitAnswer,
  onNext,
  isBookmarked = false,
  isActionEnabled = false,
}: BottombarProps) {
  return (
    <S.Wrapper>
      <S.BookMark>
        {isBookmarked ? (
          <S.Image
            source={require('@assets/images/bookmark_24_Selected.png')}
          />
        ) : (
          <S.Image source={require('@assets/images/bookmark_24_Default.png')} />
        )}
      </S.BookMark>

      {mode === 'solve' ? (
        <Button
          title="정답 확인"
          onPress={onSubmitAnswer}
          size="L"
          status={isActionEnabled ? 'Default' : 'Disabled'}
          style={{ flex: 1 }}
        />
      ) : (
        <Button
          title="다음 문제"
          onPress={onNext}
          size="L"
          status={isActionEnabled ? 'Default' : 'Disabled'}
          style={{ flex: 1 }}
        />
      )}
    </S.Wrapper>
  );
}
