import { useTheme } from '@emotion/react';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable, View, Text } from 'react-native';

type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
  label?: string;
  rightAction?: React.ReactNode;
};

export default function Checkbox({
  checked,
  onPress,
  label,
  rightAction,
}: CheckboxProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        width: '100%',
      }}
    >
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: checked
            ? theme.colors.Blue.B200
            : theme.colors.Neutral.N60,
          backgroundColor: checked ? theme.colors.Blue.B200 : 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {checked && (
          <Feather name="check" size={14} color={theme.colors.Neutral.N0} />
        )}
      </View>
      {label && (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={[
              theme.typography.Body2,
              { color: theme.colors.Neutral.N600, flex: 1 },
            ]}
          >
            {label}
          </Text>
          {rightAction && <View>{rightAction}</View>}
        </View>
      )}
      {!label && rightAction && <View style={{ flex: 1 }}>{rightAction}</View>}
    </Pressable>
  );
}
