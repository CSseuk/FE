import type { SignupFormData } from '../hooks/useSignupForm';
import type { AgreementState } from '../hooks/useAgreement';

// 아이디: 8자 이상, 영문/숫자만 허용
const ID_REGEX = /^[a-zA-Z0-9]{8,}$/;

// 비밀번호: 8자 이상
const PASSWORD_MIN_LENGTH = 8;

// 휴대폰 번호: 숫자만, 10~11자리
const PHONE_REGEX = /^\d{10,11}$/;

// 인증번호: 숫자 5자리
const VERIFICATION_CODE_REGEX = /^\d{5}$/;

export const isValidId = (id: string) => ID_REGEX.test(id.trim());

export const isValidPassword = (password: string) =>
  password.trim().length >= PASSWORD_MIN_LENGTH;

export const isPasswordConfirmed = (
  password: string,
  passwordConfirm: string
) =>
  password.trim().length > 0 &&
  passwordConfirm.trim().length > 0 &&
  password === passwordConfirm;

export const isValidName = (name: string) => name.trim().length > 0;

export const isValidPhone = (phone: string) => PHONE_REGEX.test(phone.trim());

export const isValidVerificationCode = (code: string) =>
  VERIFICATION_CODE_REGEX.test(code.trim());

/**
 * 회원가입 폼 전체 유효성 검사
 * - 아이디 / 비밀번호 / 비밀번호 확인 / 이름 / 휴대폰번호 / 인증번호
 * - 필수 약관 동의(이용약관, 개인정보취급방침)
 */
export const isFormValid = (
  formData: SignupFormData,
  agreement: AgreementState
): boolean => {
  const { id, password, passwordConfirm, name, phone, verificationCode } =
    formData;

  const isIdValid = isValidId(id);
  const isPasswordValid = isValidPassword(password);
  const isPasswordConfirmValid = isPasswordConfirmed(password, passwordConfirm);
  const isNameValid = isValidName(name);
  const isPhoneValid = isValidPhone(phone);
  const isVerificationCodeValid = isValidVerificationCode(verificationCode);

  const isAgreementValid = agreement.agreeTerms && agreement.agreePrivacy;

  return (
    isIdValid &&
    isPasswordValid &&
    isPasswordConfirmValid &&
    isNameValid &&
    isPhoneValid &&
    isVerificationCodeValid &&
    isAgreementValid
  );
};
