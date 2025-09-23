import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import Button from './Button';

const Padded = (Story: React.ComponentType) => (
  <View style={{ flex: 1, padding: 16, gap: 12, justifyContent: 'center' }}>
    <Story />
  </View>
);

storiesOf('Button (test-minimal)', module)
  .addDecorator(Padded)
  .add('default', () => <Button title="Hello" onPress={() => {}} />)
  .add('disabled', () => <Button title="Disabled" disabled />)
  .add('loading', () => <Button title="Loading" loading />)
  .add('custom style', () => (
    <Button
      title="Custom"
      onPress={() => {}}
      style={{ backgroundColor: '#10b981', borderRadius: 4 }}
    />
  ));
