import { useMemo } from 'react';
import {
  Pressable,
  Image,
  Text,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@emotion/react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

type NavItem = {
  id: number;
  label: string;
  icon: ImageSourcePropType;
  iconActive: ImageSourcePropType;
  routeName: string;
};

const navItems: NavItem[] = [
  {
    id: 1,
    label: '문제풀기',
    icon: require('@src/assets/images/Solve_24_Default.png'),
    iconActive: require('@src/assets/images/Solve_24_Selected.png'),
    routeName: 'Home',
  },
  {
    id: 2,
    label: '개념설명',
    icon: require('@src/assets/images/description_24_Default.png'),
    iconActive: require('@src/assets/images/description_24_Selected.png'),
    routeName: 'Docs',
  },
  {
    id: 3,
    label: '북마크',
    icon: require('@src/assets/images/bookmark_24_Default.png'),
    iconActive: require('@src/assets/images/bookmark_24_Selected.png'),
    routeName: 'Bookmark',
  },
  {
    id: 4,
    label: '마이페이지',
    icon: require('@src/assets/images/Mypage_24_Default.png'),
    iconActive: require('@src/assets/images/Mypage_24_Selected.png'),
    routeName: 'Mypage',
  },
];

type BotNavProps = {
  selected?: number;
  onSelect?: (id: number) => void;

  state?: {
    routes: Array<{ name: string; key: string }>;
    index: number;
  };
  navigation?: {
    navigate: (name: string) => void;
    emit: (event: any) => { defaultPrevented: boolean };
  };
  descriptors?: Record<
    string,
    {
      options?: {
        tabBarStyle?: ViewStyle | (ViewStyle | undefined)[];
        tabBarAccessibilityLabel?: string;
        title?: string;
      };
    }
  >;
};

export default function BotNav({
  selected,
  onSelect,
  state,
  navigation,
  descriptors,
}: BotNavProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  // React Navigation props가 있으면 사용, 없으면 기존 방식 사용
  const isReactNavigation = state && navigation;
  const currentSelected = isReactNavigation
    ? navItems.findIndex(
        (item) => state.routes[state.index].name === item.routeName
      ) + 1
    : selected || 1;

  const isRN = !!state && !!navigation && !!descriptors;

  const focusedStyle: ViewStyle | undefined = useMemo(() => {
    if (!isRN) return undefined;
    const key = state!.routes[state!.index].key;
    const opt = descriptors![key]?.options?.tabBarStyle;
    if (!opt) return undefined;

    // tabBarStyle이 배열일 수도 있어서 플래튼
    if (Array.isArray(opt)) return Object.assign({}, ...opt);
    return opt as ViewStyle;
  }, [isRN, state, descriptors]);

  if (focusedStyle?.display === 'none') return null;

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[
        {
          backgroundColor: theme.colors.Neutral.N0,
          width: '100%',
          height: 84 + insets.bottom,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 4,
          paddingBottom: 8,
          paddingHorizontal: 24,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          shadowColor: theme.colors.Black,
          shadowOffset: { width: 4, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 2,
        },
        focusedStyle,
      ]}
    >
      {navItems.map((item) => {
        const isFocused = isReactNavigation
          ? state.routes[state.index].name === item.routeName
          : currentSelected === item.id;

        const onPress = () => {
          if (isReactNavigation) {
            const event = navigation.emit({
              type: 'tabPress',
              target: state.routes.find(
                (route) => route.name === item.routeName
              )?.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(item.routeName);
            }
          } else {
            onSelect?.(item.id);
          }
        };

        return (
          <Pressable
            key={item.id}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <Image
              source={isFocused ? item.iconActive : item.icon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <Text
              style={[
                theme.typography.Button_Small,
                {
                  color: isFocused
                    ? theme.colors.Blue.B200
                    : theme.colors.Neutral.N80,
                },
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
}
