import { useNavigation } from '@react-navigation/native';
import * as S from './UserMenuSection.styles';
import { USER_MENU_LIST } from '../../constants/MypageScreen.constants';

interface UserMenuSectionProps {
  username: string;
  onEditProfile: () => void;
}

export default function UserMenuSection({
  username,
  onEditProfile,
}: UserMenuSectionProps) {
  const navigation = useNavigation();

  const handleMenuPress = (routeName: string) => {
    if (routeName === 'logout') {
      // TODO: 로그아웃 로직 추가
      return;
    }

    // TODO: 페이지 구현 시 navigate 연결 예정
    // navigation.navigate(routeName as never);
  };

  return (
    <S.Container>
      {/* 사용자 정보 영역 */}
      <S.MenuItem onPress={onEditProfile}>
        <S.UserInfo>
          <S.Username>{username}</S.Username>
          <S.EditText>내 정보 수정</S.EditText>
        </S.UserInfo>

        <S.ArrowIcon
          source={require('@src/assets/images/rArrow_24_Default.png')}
        />
      </S.MenuItem>

      <S.Hr />

      {/* 메뉴 목록 */}
      {USER_MENU_LIST.map((item, idx) =>
        item.isDivider ? (
          <S.Hr key={`divider-${idx}`} />
        ) : (
          <S.MenuItem
            key={item.label}
            onPress={() => handleMenuPress(item.routeName)}
          >
            <S.MenuLabel>{item.label}</S.MenuLabel>
            <S.ArrowIcon
              source={require('@src/assets/images/rArrow_24_Default.png')}
            />
          </S.MenuItem>
        )
      )}
    </S.Container>
  );
}
