import type { QuizListScreenItem } from '../types/QuizListScreen.types';

export const QUIZLIST_DB: QuizListScreenItem[] = [
  {
    Allcount: 10,
    SolveCount: 3,
    QuizListItem: [
      {
        id: 1,
        type: 'dataStructure',
        title: '첫 번째 퀴즈',
        description: '이것은 첫 번째 퀴즈입니다.',
        isSolved: 'NotSolved',
        isBookmarked: false,
      },
      {
        id: 2,
        type: 'dataStructure',
        title: '두 번째 퀴즈',
        description: '이것은 두 번째 퀴즈입니다.',
        isSolved: 'Solved',
        isBookmarked: true,
      },
      {
        id: 3,
        type: 'dataStructure',
        title: '세 번째 퀴즈',
        description: '이것은 세 번째 퀴즈입니다.',
        isSolved: 'NotSolved',
        isBookmarked: false,
      },
      {
        id: 4,
        type: 'dataStructure',
        title: '네 번째 퀴즈',
        description: '이것은 네 번째 퀴즈입니다.',
        isSolved: 'Solved',
        isBookmarked: true,
      },
      {
        id: 5,
        type: 'dataStructure',
        title: '다섯 번째 퀴즈',
        description: '이것은 다섯 번째 퀴즈입니다.',
        isSolved: 'NotSolved',
        isBookmarked: false,
      },
      {
        id: 6,
        type: 'dataStructure',
        title: '여섯 번째 퀴즈',
        description: '이것은 여섯 번째 퀴즈입니다.',
        isSolved: 'Solved',
        isBookmarked: true,
      },
    ],
  },
];
