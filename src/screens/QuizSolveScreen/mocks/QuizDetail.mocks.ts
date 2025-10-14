import type { QuizDetail } from '../types/QuizSolveScreen.types';

/**
 * 🧠 Quiz 상세 Mock Database
 * - `kind`로 문제 유형(MCQ/Subjective) 구분
 * - `options`, `correctOptionId`, `answerKeywords`, `explanation`은 선택적으로 사용
 */
export const QUIZDETAIL_DB: Record<string, QuizDetail> = {
  '1': {
    id: 1,
    type: 'dataStructure',
    kind: 'MCQ',
    title: '스택 연산의 시간복잡도',
    prompt: '배열 기반 스택의 push/pop 연산의 평균 시간 복잡도는 무엇인가요?',
    options: [
      { id: 'a', text: 'O(n)' },
      { id: 'b', text: 'O(log n)' },
      { id: 'c', text: 'O(1)' },
      { id: 'd', text: 'O(n log n)' },
    ],
    correctOptionId: 'c',
    explanation:
      '스택은 LIFO(후입선출) 구조를 가지며, push/pop 연산은 상수 시간에 수행됩니다. 따라서 평균 시간복잡도는 O(1)입니다.',
  },
  '2': {
    id: 2,
    type: 'dataStructure',
    kind: 'SUBJECTIVE',
    title: '큐와 덱의 차이점',
    prompt: '큐(Queue)와 덱(Deque)의 차이점을 간단히 설명하세요.',
    correctAnswer: '정답은 이거예요',
    explanation:
      '큐는 한쪽 끝(front)에서만 삭제, 다른 쪽(rear)에서만 삽입하는 FIFO 구조입니다. 반면 덱은 양쪽 끝 모두에서 삽입과 삭제가 가능합니다.',
  },
  '3': {
    id: 3,
    type: 'algorithm',
    kind: 'MCQ',
    title: '이진 탐색의 시간복잡도',
    prompt: '정렬된 배열에서 이진 탐색(Binary Search)의 시간복잡도는?',
    options: [
      { id: 'a', text: 'O(n)' },
      { id: 'b', text: 'O(log n)' },
      { id: 'c', text: 'O(n log n)' },
      { id: 'd', text: 'O(1)' },
    ],
    correctOptionId: 'b',
    explanation:
      '이진 탐색은 탐색 구간을 절반씩 줄여나가므로, 시간복잡도는 O(log n)입니다.',
  },
};

/**
 * ⏳ 비동기 Mock API (로딩 시뮬레이션 포함)
 */
const wait = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @function getQuizDetail
 * @description 주어진 quizId로 QuizDetail 데이터를 반환
 * @param id Quiz ID (문자열)
 * @returns Promise<QuizDetail | null>
 */
export async function getQuizDetail(id: string): Promise<QuizDetail | null> {
  await wait();
  return QUIZDETAIL_DB[id] ?? null;
}
