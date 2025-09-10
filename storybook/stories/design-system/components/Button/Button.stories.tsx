// storybook/stories/design-system/components/Button/Button.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import Button from './Button';

storiesOf('DesignSystem/Button', module)
  .add('기본', () => (
    <View style={{ padding: 16 }}>
      <Button title="눌러보세요" onPress={() => console.log('버튼 눌림!')} />
    </View>
  ))
  .add('비활성화', () => (
    <View style={{ padding: 16 }}>
      <Button title="비활성 버튼" onPress={() => {}} />
      {/* Button.tsx에서 disabled prop 추가했다면 */}
    </View>
  ))
  .add('여러 개 나열', () => (
    <View style={{ padding: 16, gap: 12 }}>
      <Button title="Primary" onPress={() => console.log('Primary')} />
      <Button title="Secondary" onPress={() => console.log('Secondary')} />
      <Button title="Danger" onPress={() => console.log('Danger')} />
    </View>
  ));
