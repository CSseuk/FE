import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
};

export default function Button({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#4F46E5',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontWeight: '600' }}>{title}</Text>
    </TouchableOpacity>
  );
}
