import { useState } from 'react';
import { isValidPhone } from '../utils/validation';

export type SignupFormData = {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  verificationCode: string;
};

export const useSignupForm = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    verificationCode: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] =
    useState(false);
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState<
    string | undefined
  >();

  const updateField = <K extends keyof SignupFormData>(
    field: K,
    value: SignupFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // 휴대폰 번호가 변경되면 에러 메시지 초기화
    if (field === 'phone') {
      setPhoneErrorMessage(undefined);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const togglePasswordConfirmVisibility = () => {
    setIsPasswordConfirmVisible((prev) => !prev);
  };

  const sendVerificationCode = async () => {
    // TODO: 인증번호 전송 관련 API 호출 및 로직 구현
    const phone = formData.phone.trim();

    // 전화번호가 비어있거나 포맷이 올바르지 않으면 전송하지 않음
    if (!phone) {
      setPhoneErrorMessage('휴대폰 번호를 입력해야 합니다.');
      return;
    }

    if (!isValidPhone(phone)) {
      setPhoneErrorMessage('휴대폰 번호 형식이 올바르지 않습니다.');
      return;
    }

    // 검증 통과 시 에러 메시지 초기화하고 전송 완료 처리
    setPhoneErrorMessage(undefined);
    setIsVerificationCodeSent(true);
  };

  return {
    formData,
    updateField,
    isPasswordVisible,
    isPasswordConfirmVisible,
    isVerificationCodeSent,
    phoneErrorMessage,
    togglePasswordVisibility,
    togglePasswordConfirmVisibility,
    sendVerificationCode,
  };
};
