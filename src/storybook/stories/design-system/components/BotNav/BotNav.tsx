import React, { useState } from 'react';
import {
  Pressable,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';
import { useTheme } from '@emotion/react';

type NavItem = {
  id: number;
  label: string;
  icon: ImageSourcePropType;
  iconActive: ImageSourcePropType;
};

const item: NavItem[] = [
  {
    id: 1,
    label: '문제풀기',
    icon: require('@src/assets/images/Solve_24_Default.png'),
    iconActive: require('@src/assets/images/Solve_24_Selected.png'),
  },
  {
    id: 2,
    label: '개념설명',
    icon: require('@src/assets/images/description_24_Default.png'),
    iconActive: require('@src/assets/images/description_24_Selected.png'),
  },
  {
    id: 3,
    label: '북마크',
    icon: require('@src/assets/images/bookmark_24_Default.png'),
    iconActive: require('@src/assets/images/bookmark_24_Selected.png'),
  },
  {
    id: 4,
    label: '마이페이지',
    icon: require('@src/assets/images/Mypage_24_Default.png'),
    iconActive: require('@src/assets/images/Mypage_24_Selected.png'),
  },
];

type BotNavProps = {
  selected: number;
  onSelect: (id: number) => void;
};

export default function BotNav({ selected, onSelect }: BotNavProps) {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.Neutral.N0,
        width: '100%',
        height: 84,
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
      }}
    >
      {item.map((item) => {
        const isSelected = selected === item.id;
        return (
          <Pressable
            key={item.id}
            onPress={() => onSelect(item.id)}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <Image
              source={isSelected ? item.iconActive : item.icon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <Text
              style={[
                theme.typography.Button_Small,
                {
                  color: isSelected
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
    </View>
  );
}
