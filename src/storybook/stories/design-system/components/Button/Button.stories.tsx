// components/Button/Button.column.stories.tsx
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, ScrollView, Text } from 'react-native';
import { ThemeProvider } from '@emotion/react';
import { Feather } from '@expo/vector-icons';

import Button from './Button';
import theme from '@styles/theme';

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <View
      style={{ flex: 1, padding: 16, backgroundColor: theme.colors.Neutral.N0 }}
    >
      <Story />
    </View>
  </ThemeProvider>
);

const VARIANTS = ['Primary', 'Tertiary'] as const;
const SIZES = ['S', 'M', 'L'] as const;

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View style={{ marginBottom: 24 }}>
    <Text style={[theme.typography.Body2, { marginBottom: 8 }]}>{title}</Text>
    {children}
  </View>
);

function ColumnCase({
  label,
  variant,
  size,
  leftIconName,
  rightIconName,
}: {
  label: string;
  variant: 'Primary' | 'Tertiary';
  size: 'S' | 'M' | 'L';
  leftIconName?: React.ComponentProps<typeof Feather>['name'];
  rightIconName?: React.ComponentProps<typeof Feather>['name'];
}) {
  return (
    <View style={{ alignSelf: 'stretch' }}>
      <Text style={[theme.typography.Body3, { marginBottom: 8 }]}>{label}</Text>

      {/* Default */}
      <View style={{ marginBottom: 8 }}>
        <Button
          title="Default"
          button={variant}
          size={size}
          status="Default"
          leftIconName={leftIconName}
          rightIconName={rightIconName}
          onPress={() => {}}
        />
      </View>

      {/* Pressed (정적 미리보기용) */}
      <View style={{ marginBottom: 8 }}>
        <Button
          title="Pressed (preview)"
          button={variant}
          size={size}
          status="Pressed"
          leftIconName={leftIconName}
          rightIconName={rightIconName}
        />
      </View>

      {/* Disabled */}
      <View>
        <Button
          title="Disabled"
          button={variant}
          size={size}
          status="Disabled"
          leftIconName={leftIconName}
          rightIconName={rightIconName}
        />
      </View>
    </View>
  );
}

const AllColumns_NoIcons = () => (
  <ScrollView>
    {VARIANTS.map((v) => (
      <Section key={`noicons-${v}`} title={`Variant: ${v} (no icons)`}>
        {SIZES.map((s) => (
          <View key={`noicons-${v}-${s}`} style={{ marginBottom: 20 }}>
            <ColumnCase label={`Size: ${s}`} variant={v} size={s} />
          </View>
        ))}
      </Section>
    ))}
  </ScrollView>
);

const AllColumns_WithIcons = () => (
  <ScrollView>
    {VARIANTS.map((v) => (
      <Section
        key={`icons-${v}`}
        title={`Variant: ${v} (with left/right icons)`}
      >
        {SIZES.map((s) => (
          <View key={`icons-${v}-${s}`} style={{ marginBottom: 20 }}>
            <ColumnCase
              label={`Size: ${s}`}
              variant={v}
              size={s}
              leftIconName="chevron-left"
              rightIconName="chevron-right"
            />
          </View>
        ))}
      </Section>
    ))}
  </ScrollView>
);

const AllColumns_WithLeftIcons = () => (
  <ScrollView>
    {VARIANTS.map((v) => (
      <Section
        key={`icons-${v}`}
        title={`Variant: ${v} (with left/right icons)`}
      >
        {SIZES.map((s) => (
          <View key={`icons-${v}-${s}`} style={{ marginBottom: 20 }}>
            <ColumnCase
              label={`Size: ${s}`}
              variant={v}
              size={s}
              leftIconName="chevron-left"
            />
          </View>
        ))}
      </Section>
    ))}
  </ScrollView>
);

const AllColumns_WithRightIcons = () => (
  <ScrollView>
    {VARIANTS.map((v) => (
      <Section
        key={`icons-${v}`}
        title={`Variant: ${v} (with left/right icons)`}
      >
        {SIZES.map((s) => (
          <View key={`icons-${v}-${s}`} style={{ marginBottom: 20 }}>
            <ColumnCase
              label={`Size: ${s}`}
              variant={v}
              size={s}
              rightIconName="chevron-right"
            />
          </View>
        ))}
      </Section>
    ))}
  </ScrollView>
);

storiesOf('Components/Button (column)', module)
  .addDecorator(withTheme)
  .add('Case columns - no icons', () => <AllColumns_NoIcons />)
  .add('Case columns - with icons', () => <AllColumns_WithIcons />)
  .add('Case columns - with left icons', () => <AllColumns_WithLeftIcons />)
  .add('Case columns - with right icons', () => <AllColumns_WithRightIcons />);
