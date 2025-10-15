import type { Block, InlineToken } from '../MarkdownRenderer.types';
import slugify from './utils';
import parseInlines from './parseInlines';

/**
 * Markdown을 Block 배열로 파싱하는 함수
 * - 헤딩, 코드펜스, 인용문, 테이블, 리스트, 문단 등 순서대로 매칭
 */
export default function parseBlocks(md: string): Block[] {
  const lines = md.replace(/\r\n?/g, '\n').split('\n');
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    let line = lines[i];

    // 수평선
    if (/^\s{0,3}(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // 코드펜스 ```lang
    const fenceMatch = line.match(/^\s*```(\w+)?\s*$/);
    if (fenceMatch) {
      const lang = fenceMatch[1];
      const buf: string[] = [];
      i++;
      while (i < lines.length && !/^\s*```\s*$/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      // 닫는 ``` 건너뛰기
      if (i < lines.length) i++;
      blocks.push({ type: 'code', code: buf.join('\n'), lang });
      continue;
    }

    // 이미지
    const imgMatch = line.match(/^\s*!\[([^\]]*)\]\(([^)]+)\)\s*$/);
    if (imgMatch) {
      blocks.push({ type: 'image', alt: imgMatch[1], uri: imgMatch[2] });
      i++;
      continue;
    }

    // 제목 # ~ ###
    const headingMatch = line.match(/^\s{0,3}(#{1,3})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      blocks.push({
        type: 'heading',
        level,
        text,
        id: slugify(text),
      });
      i++;
      continue;
    }

    // 인용문 >
    const quoteMatch = line.match(/^\s{0,3}>\s?(.*)$/);
    if (quoteMatch) {
      const buf: string[] = [quoteMatch[1]];
      i++;
      while (i < lines.length) {
        const m = lines[i].match(/^\s{0,3}>\s?(.*)$/);
        if (!m) break;
        buf.push(m[1]);
        i++;
      }
      blocks.push({ type: 'blockquote', inlines: parseInlines(buf.join(' ')) });
      continue;
    }

    // table
    const isTableRow = (s: string) => /^\s*\|.*\|\s*$/.test(s);
    const isDivider = (s: string) =>
      /^\s*\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|\s*$/.test(s);

    if (isTableRow(line) && i + 1 < lines.length && isDivider(lines[i + 1])) {
      // header
      const header = line
        .trim()
        .slice(1, -1)
        .split('|')
        .map((s) => s.trim());
      i += 2; // header + divider

      // rows
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) {
        const row = lines[i]
          .trim()
          .slice(1, -1)
          .split('|')
          .map((s) => s.trim());
        rows.push(row);
        i++;
      }

      blocks.push({ type: 'table', header, rows });
      continue;
    }

    // 들여쓰기에 따른 level 계산
    function getIndentLevel(line: string) {
      const match = line.match(/^(\s*)/);
      const spaces = match ? match[1].length : 0;
      return Math.floor(spaces / 2); // 2칸당 한 단계로 계산
    }

    // 리스트 (순서/비순서/태스크)
    const ulTask = line.match(/^\s{0,3}[-*]\s+\[([ xX])\]\s+(.*)$/);
    const ul = line.match(/^\s{0,3}[-*]\s+(.*)$/);
    const ol = line.match(/^\s{0,3}\d+\.\s+(.*)$/);

    if (ulTask || ul || ol) {
      const ordered = !!ol;
      const items: {
        inlines: InlineToken[];
        checked?: boolean;
        level: number;
      }[] = [];

      while (i < lines.length) {
        const l = lines[i];
        const level = getIndentLevel(l);
        // task item
        const mTask = l.match(/^\s{0,3}[-*]\s+\[([ xX])\]\s+(.*)$/);
        if (mTask) {
          items.push({
            inlines: parseInlines(mTask[2]),
            checked: mTask[1].toLowerCase() === 'x',
            level,
          });
          i++;
          continue;
        }

        // 일반 ul/ol
        const m = ordered
          ? l.match(/^\s{0,3}\d+\.\s+(.*)$/)
          : l.match(/^\s{0,3}[-*]\s+(.*)$/);
        if (!m) break;

        items.push({ inlines: parseInlines(m[1]), level });
        i++;
      }

      blocks.push({ type: 'list', ordered, items });
      continue;
    }

    // 빈 줄(문단 구분)
    if (/^\s*$/.test(line)) {
      i++;
      continue;
    }

    // 문단(빈 줄이나 다른 블록 나오기 전까지 합침)
    const para: string[] = [line];
    i++;
    while (
      i < lines.length &&
      !/^\s*$/.test(lines[i]) &&
      !/^\s{0,3}(#{1,3})\s+/.test(lines[i]) &&
      !/^\s{0,3}[-*]\s+/.test(lines[i]) &&
      !/^\s{0,3}\d+\.\s+/.test(lines[i]) &&
      !/^\s*```/.test(lines[i]) &&
      !/^\s{0,3}>\s?/.test(lines[i]) &&
      !/^\s{0,3}(-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push({ type: 'paragraph', inlines: parseInlines(para.join(' ')) });
  }

  return blocks;
}
