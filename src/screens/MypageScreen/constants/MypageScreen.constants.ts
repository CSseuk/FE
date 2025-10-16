interface UserMenuItem {
  label: string;
  routeName: string;
  isDivider?: false;
}

interface DividerItem {
  isDivider: true;
}

export type MenuItemType = UserMenuItem | DividerItem;

export const USER_MENU_LIST: MenuItemType[] = [
  {
    label: '서비스 이용약관',
    routeName: 'terms',
  },
  {
    label: '개인정보처리방침',
    routeName: 'privacy',
  },
  {
    isDivider: true,
  },
  {
    label: '로그아웃',
    routeName: 'logout',
  },
  {
    label: '탈퇴하기',
    routeName: 'withdraw',
  },
];
