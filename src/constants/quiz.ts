import type { QuizType } from "@src/types/quiz";

export const QUIZ_LABELS: Record<QuizType, string> = {
  dataStructure: "자료구조",
  algorithm: "알고리즘",
  network: "네트워크",
  operatingSystem: "운영체제",
  computerStructure: "컴퓨터구조",
  database: "데이터베이스",
};

export const QUIZ_TYPES: QuizType[] = [
  "dataStructure",
  "algorithm",
  "network",
  "operatingSystem",
  "computerStructure",
  "database",
];
