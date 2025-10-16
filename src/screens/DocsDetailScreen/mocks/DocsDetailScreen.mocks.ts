import type { DocsType } from '../types/DocsDetailScreen.types';

export const MOCK_DOCS: DocsType[] = [
  {
    quizType: 'operatingSystem',
    title: '운영체제 개요',
    content: `
# 마크다운 예시 문서

> 이 문서는 **모든 마크다운 문법**이 제대로 렌더링되는지 확인하기 위한 테스트용입니다.

---

## 1. 기본 텍스트

- **굵은 글씨**
- ~~취소선~~

---

## 2. 목록 (Lists)

### 순서 없는 목록
- 사과
  - 빨간 사과
  - 초록 사과
- 바나나
- 오렌지

### 순서 있는 목록
1. 시작
2. 중간
3. 끝

---

## 3. 링크 & 이미지

[OpenAI](https://openai.com)

![예시 이미지](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/240px-Markdown-mark.svg.png)

---

## 4. 코드 블록 (Code Blocks)

### 인라인 코드
\`console.log('Hello Markdown');\`

### 여러 줄 코드
\`\`\`tsx
import React from 'react';

export default function HelloWorld() {
  return <Text>Hello Markdown!</Text>;
}
\`\`\`

---

## 5. 인용구 (Blockquote)

> “Talk is cheap. Show me the code.”  
> — Linus Torvalds

---

## 6. 표 (Tables)

| 이름 | 역할 | 언어 |
|------|------|------|
| 이정선 | 프론트엔드 개발자 | TypeScript |

---

## 7. 체크리스트 (Task List)

- [x] 구조 설계 완료
- [x] 마크다운 렌더링 테스트
- [ ] API 연동
- [ ] 실제 문서 데이터 적용

---

## 8. 구분선 & 이모지

---

🎯 **테스트 완료!**

---

## 9. 수식 (LaTeX)

\`$E = mc^2$\`

\`\`\`math
\\int_0^1 x^2 dx = \\frac{1}{3}
\`\`\`

`,
  },
];
