import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import MarkdownRenderer from '@components/MarkdownRenderer';
import { useTheme } from '@emotion/react';
import * as S from './DocsDetailScreen.styles';
import type { DocsStackParamList } from '@src/navigation/navigation.types';
import { MOCK_DOCS } from './mocks/DocsDetailScreen.mocks';

type DocsDetailRouteProp = RouteProp<DocsStackParamList, 'DocsDetail'>;

export default function DocsDetailScreen() {
  const { params } = useRoute<DocsDetailRouteProp>();
  const theme = useTheme();

  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const found = MOCK_DOCS[0];
        setContent(found.content);
      } catch {}
    };
    fetchMarkdown();
  }, [params]);

  if (!content) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={theme.colors.Blue.B200} />
      </View>
    );
  }

  return (
    <S.Container>
      <MarkdownRenderer source={content} />
    </S.Container>
  );
}
