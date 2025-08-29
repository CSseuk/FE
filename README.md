# Dongguk Likelion App Frontend

> CS앱 CSseuk을 위한 프론트엔드 저장소입니다.

---

## 🚀 Overview

설명

---

## 🛠️ Tech Stack

- **React Native**
- **TypeScript**
- **Emotion** (CSS-in-JS 스타일링)
- **React Navigation**
- **TanStack Query (React Query)**

---

## 📁 Project Structure

```bash
src/
├── assets/          # 이미지, 폰트 등 정적 파일
├── components/      # 재사용 가능한 컴포넌트
├── hooks/           # 커스텀 훅
├── navigation/      # 라우팅 관련
├── screens/         # 주요 화면 컴포넌트
├── services/             # API 요청 모듈
├── stores/          # Zustand 등 상태 관리
├── styles/          # Emotion을 활용한 Styles 관리
├── types/           # 타입 정의
└── utils/           # 유틸 함수
```

---

## 🧩 Getting Started

```bash
# 의존성 설치
yarn install

# 앱 실행 (Expo 사용 시)
yarn expo start

# expo start 실패 시
npx expo start --tunnel -c
```

> 📦 패키지 매니저: **Yarn Berry**

---

## 🧑‍💻 Git Commit & PR Convention

### 1. 커밋 메시지 규칙

| 타입     | 설명                       |
| -------- | -------------------------- |
| feat     | 새로운 기능 추가           |
| fix      | 버그 수정                  |
| refactor | 코드 리팩토링              |
| style    | 스타일/포맷팅 수정         |
| chore    | 설정, 패키지 변경 등       |
| docs     | 문서 수정 (README 등)      |
| test     | 테스트 코드 추가/수정      |
| hotfix   | 운영 중단급 긴급 버그 수정 |
| perf     | 성능 개선                  |
| ci       | CI/CD 설정 변경            |
| build    | 빌드 시스템 관련 파일 수정 |
| revert   | 이전 커밋 되돌리기         |

```bash
# 예시
feat: 출석체크 화면 UI 구현
fix: 공지 리스트 페이징 오류 수정
```

### 2. 브랜치 네이밍 규칙

```bash
# 브랜치 이름 형식
feature/#이슈번호-작업내용
fix/#이슈번호-버그내용
refactor/#이슈번호-리팩토링내용
```

예: `feature/#12-attendance-ui`

---

## 🔀 Issue 기반 PR 프로세스

1. 작업 시작 전 반드시 GitHub Issue 생성
2. 브랜치 생성 → 기능 구현 → 커밋 → PR 생성
3. PR 템플릿에 맞춰 설명 작성

```md
## 🔗 관련 이슈

Closes #이슈번호

## ✨ 작업 내용

- 주요 작업 1
- 주요 작업 2

## 📸 스크린샷 (선택)

[이미지 첨부]

## 💬 기타 논의 사항

- TODO, 논의 필요사항 등
```

4. 코드 리뷰 후 병합

---

## 💡 Maintainer

| 이름                                 | 역할               |
| ------------------------------------ | ------------------ |
| [오태준](https://github.com/taejun0) | Frontend Developer |
| 이정선                               | Frontend Developer |

---

## 📝 License

본 저장소는 CS앱 프로젝트 목적에 한해 사용됩니다.
