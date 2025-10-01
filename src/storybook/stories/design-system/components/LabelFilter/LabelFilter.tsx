import React from "react";
import * as S from "./LabelFilter.styles";
import { useTheme } from "@emotion/react";
import type { QuizType } from "@src/types/quiz";
import { QUIZ_LABELS, QUIZ_TYPES } from "@constants/quiz";
import { Pressable, View } from "react-native";

type ChipKind = QuizType | "all";

interface LabelChipProps {
  kind: ChipKind;
  active?: boolean;
  onPress?: (kind: ChipKind) => void;
  labelOverride?: string;
}

const Label = ({
  active = false,
  kind,
  onPress,
  labelOverride,
}: LabelChipProps) => {
  const theme = useTheme() as any;

  const isAll = kind === "all";
  const basePalette = isAll
    ? { light: theme.colors.Blue.B50, dark: theme.colors.Blue.B200 }
    : theme.colors.Sementic?.[kind as QuizType];

  const bgLight = basePalette.light;
  const dark = basePalette.dark;
  const text =
    labelOverride ?? (isAll ? "전체" : QUIZ_LABELS[kind as QuizType]);

  return (
    <Pressable onPress={() => onPress?.(kind)}>
      <S.Wrapper bg={bgLight} border={dark} disabled={!active}>
        <S.Text disabled={!active} color={dark}>
          {text}
        </S.Text>
      </S.Wrapper>
    </Pressable>
  );
};

interface LabelFilterProps {
  currentSelected: ChipKind;
  onChange: (next: ChipKind) => void;
}

export default function LabelFilter({
  currentSelected,
  onChange,
}: LabelFilterProps) {
  const handleToggle = (type: ChipKind) => {
    onChange(type);
  };

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      <Label
        kind='all'
        active={currentSelected === "all"}
        onPress={() => handleToggle("all")}
        labelOverride='전체'
      />
      {QUIZ_TYPES.map((type) => (
        <Label
          key={type}
          kind={type}
          active={currentSelected === type}
          onPress={() => handleToggle(type)}
        />
      ))}
    </View>
  );
}
