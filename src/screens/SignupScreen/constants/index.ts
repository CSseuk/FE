export const AGREEMENT_LABELS = {
  ALL: '모두 동의합니다.',
  TERMS: '이용약관 동의',
  PRIVACY: '개인정보 취급방침 동의',
  MARKETING: '마케팅 정보 수신 동의',
} as const;

export const INPUT_LABELS = {
  ID: '아이디',
  PASSWORD: '비밀번호',
  PASSWORD_CONFIRM: '비밀번호 확인',
  NAME: '이름',
  PHONE: '휴대폰 번호',
  VERIFICATION_CODE: '인증번호',
} as const;

export const INPUT_PLACEHOLDERS = {
  ID: '아이디를 입력하세요.',
  PASSWORD: '비밀번호를 입력하세요.',
  PASSWORD_CONFIRM: '비밀번호 확인을 입력하세요.',
  NAME: '성명을 입력하세요.',
  PHONE: "'-' 구분없이 입력",
  VERIFICATION_CODE: '인증번호 입력',
} as const;
