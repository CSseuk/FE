import type { InlineToken } from '../MarkdownRenderer.types';
import { Text } from 'react-native';
import * as S from '../MarkdownRenderer.styles';

/**
 * InlineToken을 각 스타일을 입힌 Text로 렌더링
 * (링크는 onPress로 외부 URL 오픈)
 */
export default function renderInline(
  t: InlineToken,
  key: number,
  onLink: (url: string) => void
) {
  switch (t.type) {
    case 'text':
      return <Text key={key}>{t.text}</Text>;
    case 'bold':
      return <S.Bold key={key}>{t.text}</S.Bold>;
    case 'strike':
      return <S.Strike key={key}>{t.text}</S.Strike>;
    case 'code':
      return <S.CodeInline key={key}>{t.text}</S.CodeInline>;
    case 'link':
      return (
        <S.Link key={key} onPress={() => onLink(t.url)} suppressHighlighting>
          {t.text}
        </S.Link>
      );
    default:
      return null;
  }
}
