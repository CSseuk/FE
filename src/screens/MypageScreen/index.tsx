import * as S from './MypageScreen.styles';
import { UserMenuSection, CalendarSection } from './components';
import { MOCK_USER, MOCK_COUNTS } from './mocks/MypageScreen.mocks';

export default function MypageScreen() {
  return (
    <S.Wrapper>
      <CalendarSection data={MOCK_COUNTS} />
      <S.Spacing />
      <UserMenuSection username={MOCK_USER.username} onEditProfile={() => {}} />
    </S.Wrapper>
  );
}
