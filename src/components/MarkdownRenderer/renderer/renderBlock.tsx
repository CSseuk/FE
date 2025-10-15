import type { Block } from '../types/MarkdownRenderer.types';
import { LayoutChangeEvent } from 'react-native';
import { View } from 'react-native';
import * as S from '../MarkdownRenderer.styles';
import renderInline from './renderInline';

/**
 * Block 타입별로 대응되는 컴포넌트 렌더링
 * - heading 은 onLayout 으로 앵커 기록
 * - list 의 들여쓰기는 level * 12px 로 처리
 */
export default function renderBlock(
  b: Block,
  idx: number,
  recordAnchor: (id: string) => (e: LayoutChangeEvent) => void,
  openURL: (url: string) => void
) {
  switch (b.type) {
    case 'heading': {
      const HStyle = b.level === 1 ? S.H1 : b.level === 2 ? S.H2 : S.H3;
      return (
        <View key={idx} onLayout={recordAnchor(b.id)}>
          <HStyle>{b.text}</HStyle>
        </View>
      );
    }

    case 'paragraph':
      return (
        <S.Paragraph key={idx}>
          {b.inlines.map((t, i) => renderInline(t, i, openURL))}
        </S.Paragraph>
      );

    case 'list':
      return (
        <S.List key={idx}>
          {b.items.map((it, i) => (
            <S.ListItem key={i} style={{ marginLeft: it.level * 12 }}>
              {typeof it.checked === 'boolean' ? (
                <S.ListBullet>{it.checked ? '☑' : '☐'}</S.ListBullet>
              ) : (
                <S.ListBullet>{b.ordered ? `${i + 1}.` : '•'}</S.ListBullet>
              )}
              <S.ListText>
                {it.inlines.map((t, j) => renderInline(t, j, openURL))}
              </S.ListText>
            </S.ListItem>
          ))}
        </S.List>
      );

    case 'code':
      return (
        <S.CodeBox key={idx}>
          <S.CodeText>{b.code}</S.CodeText>
        </S.CodeBox>
      );

    case 'blockquote':
      return (
        <S.Quote key={idx}>
          <S.QuoteText>
            {b.inlines.map((t, i) => renderInline(t, i, openURL))}
          </S.QuoteText>
        </S.Quote>
      );

    case 'hr':
      return <S.Hr key={idx} />;

    case 'image':
      return (
        <S.ImgWrap key={idx}>
          <S.Img source={b.uri} />
        </S.ImgWrap>
      );

    case 'table':
      return (
        <S.Table key={idx}>
          <S.TableHeader>
            {b.header.map((h, i) => (
              <S.TableHeaderCell key={i}>
                <S.TableHeaderText>{h}</S.TableHeaderText>
              </S.TableHeaderCell>
            ))}
          </S.TableHeader>
          {b.rows.map((row, r) => (
            <S.TableRow key={r}>
              {row.map((cell, c) => (
                <S.TableCell key={c}>
                  <S.TableCellText>{cell}</S.TableCellText>
                </S.TableCell>
              ))}
            </S.TableRow>
          ))}
        </S.Table>
      );
    default:
      return null;
  }
}
