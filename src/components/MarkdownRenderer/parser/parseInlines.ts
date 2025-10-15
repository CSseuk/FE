import type { InlineToken } from '../MarkdownRenderer.types';

/**
 * 인라인 파싱 함수
 * - 링크, 인라인코드, 굵게(**, __), 취소선(~~) 처리
 * - Italic은 한글에 적용이 안되는 문제로 임시 제외
 */
export default function parseInlines(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let i = 0;

  const pushText = (t: string) => {
    if (!t) return;
    tokens.push({ type: 'text', text: t });
  };

  while (i < text.length) {
    // [text](url)
    const link = text.slice(i).match(/^\[([^\]]+)\]\(([^)\s]+)\)/);
    if (link) {
      tokens.push({ type: 'link', text: link[1], url: link[2] });
      i += link[0].length;
      continue;
    }

    // `code`
    if (text[i] === '`') {
      const end = text.indexOf('`', i + 1);
      if (end > i) {
        const code = text.slice(i + 1, end);
        tokens.push({ type: 'code', text: code });
        i = end + 1;
        continue;
      }
    }

    // **bold**
    const boldStar = text.slice(i).match(/^\*\*([\s\S]+?)\*\*/);
    if (boldStar) {
      tokens.push({ type: 'bold', text: boldStar[1] });
      i += boldStar[0].length;
      continue;
    }

    // __bold__
    const boldUnd = text.slice(i).match(/^__([\s\S]+?)__/);
    if (boldUnd) {
      tokens.push({ type: 'bold', text: boldUnd[1] });
      i += boldUnd[0].length;
      continue;
    }

    // ~~strike~~
    const strike = text.slice(i).match(/^~~([^~]+)~~/);
    if (strike) {
      tokens.push({ type: 'strike', text: strike[1] });
      i += strike[0].length;
      continue;
    }

    // 한 글자씩 텍스트로 누적
    pushText(text[i]);
    i++;
  }

  // 인접 text 토큰 병합
  const merged: InlineToken[] = [];
  for (const t of tokens) {
    const last = merged[merged.length - 1];
    if (last && last.type === 'text' && t.type === 'text') {
      last.text += t.text;
    } else {
      merged.push(t);
    }
  }

  return merged;
}
