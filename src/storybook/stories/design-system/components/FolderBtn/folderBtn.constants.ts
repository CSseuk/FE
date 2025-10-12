import type { Subject } from './folderBtn.types';

export const SCREEN_PADDING = 24;
export const GAP = 12;
export const BASE_WIDTH = 180;

export const DEFAULT_SUBJECTS = (colors: any): Subject[] => [
  {
    id: 1,
    title: '자료구조',
    type: 'dataStructure',
    subtitle: [
      '선형 자료구조',
      '비선형 자료구조',
      '해시 테이블',
      '시간복잡도와 공간 복잡도',
    ],
    image: require('@src/assets/images/folderBtn/folderBtn1.png'),
    Colors: colors.Semantic.dataStructure.dark,
    logo: require('@src/assets/images/iconJagu_24_Selected.png'),
  },
  {
    id: 2,
    title: '알고리즘',
    type: 'algorithm',
    subtitle: [
      '정렬 알고리즘',
      '탐색 알고리즘',
      '알고리즘 설계 기법',
      '그래프 알고리즘',
    ],
    image: require('@src/assets/images/folderBtn/folderBtn2.png'),
    Colors: colors.Semantic.algorithm.dark,
    logo: require('@src/assets/images/iconAlgorithm_24_Selected.png'),
  },
  {
    id: 3,
    title: '네트워크',
    type: 'network',
    subtitle: [
      '네트워크 기초',
      'OSI 7계층과 TCP/IP 모델',
      '주요 프로토콜',
      '네트워크 보안',
    ],
    image: require('@src/assets/images/folderBtn/folderBtn3.png'),
    Colors: colors.Semantic.network.dark,
    logo: require('@src/assets/images/iconNetwork_24_Selected.png'),
  },
  {
    id: 4,
    title: '운영체제',
    type: 'operatingSystem',
    subtitle: [
      '운영체제 개요',
      '프로세스와 스레드',
      'CPU 스케줄링',
      '프로세스 동기화',
      '교착 상태',
      '메모리 관리',
      '파일 시스템',
    ],
    image: require('@src/assets/images/folderBtn/folderBtn4.png'),
    Colors: colors.Semantic.operatingSystem.dark,
    logo: require('@src/assets/images/iconUnchae_24_Selected.png'),
  },
  {
    id: 5,
    title: '컴퓨터구조',
    type: 'computerStructure',
    subtitle: [
      '컴퓨터의 기본 구성',
      '데이터 표현',
      '논리 회로',
      '명령어 집합 구조 (ISA)',
      '프로세서 구조',
      '메모리 계층',
    ],
    image: require('@src/assets/images/folderBtn/folderBtn5.png'),
    Colors: colors.Semantic.computerStructure.dark,
    logo: require('@src/assets/images/iconComputer_24_Selected.png'),
  },
  {
    id: 6,
    title: '데이터베이스',
    type: 'database',
    subtitle: [
      '데이터베이스 개요',
      '관계형 데이터베이스',
      'SQL',
      '정규화',
      '트랜잭션과 병행 제어',
      '데이터베이스 설계',
    ],
    image: require('@src/assets/images/folderBtn/folderBtn6.png'),
    Colors: colors.Semantic.database.dark,
    logo: require('@src/assets/images/iconDatabase_24_Selected.png'),
  },
];
