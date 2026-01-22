import React from 'react';
import { InputLabel, InputWithButton } from '@design-system/index';
import * as S from './InputSection.styled';
import type { SignupFormData } from '../../hooks/useSignupForm';
import { INPUT_LABELS, INPUT_PLACEHOLDERS } from '../../constants';

type InputSectionProps = {
  formData: SignupFormData;
  updateField: <K extends keyof SignupFormData>(
    field: K,
    value: SignupFormData[K]
  ) => void;
  isPasswordVisible: boolean;
  isPasswordConfirmVisible: boolean;
  isVerificationCodeSent: boolean;
  onTogglePasswordVisibility: () => void;
  onTogglePasswordConfirmVisibility: () => void;
  onDuplicateCheck: () => void;
  onSendVerificationCode: () => void;
  idCheckMessage?: string;
  passwordErrorMessage?: string;
  phoneErrorMessage?: string;
  verificationMessage?: string;
  onVerifyCode?: () => void;
};

export const InputSection = ({
  formData,
  updateField,
  isPasswordVisible,
  isPasswordConfirmVisible,
  isVerificationCodeSent,
  onTogglePasswordVisibility,
  onTogglePasswordConfirmVisibility,
  onDuplicateCheck,
  onSendVerificationCode,
  idCheckMessage,
  passwordErrorMessage,
  phoneErrorMessage,
  verificationMessage,
  onVerifyCode,
}: InputSectionProps) => {
  return (
    <S.InputSection>
      <InputWithButton
        size="L"
        label={INPUT_LABELS.ID}
        placeholder={INPUT_PLACEHOLDERS.ID}
        value={formData.id}
        onChange={(value) => updateField('id', value)}
        caption={idCheckMessage}
        buttonTitle="중복확인"
        onButtonPress={onDuplicateCheck}
        buttonDisabled={!formData.id || formData.id.length === 0}
      />

      <InputLabel
        size="L"
        label={INPUT_LABELS.PASSWORD}
        placeholder={INPUT_PLACEHOLDERS.PASSWORD}
        value={formData.password}
        onChange={(value) => updateField('password', value)}
        rightIconName={isPasswordVisible ? 'eye' : 'eye-off'}
        secureTextEntry={!isPasswordVisible}
        onRightIconPress={onTogglePasswordVisibility}
      />

      <InputLabel
        size="L"
        label={INPUT_LABELS.PASSWORD_CONFIRM}
        placeholder={INPUT_PLACEHOLDERS.PASSWORD_CONFIRM}
        value={formData.passwordConfirm}
        onChange={(value) => updateField('passwordConfirm', value)}
        rightIconName={isPasswordConfirmVisible ? 'eye' : 'eye-off'}
        secureTextEntry={!isPasswordConfirmVisible}
        onRightIconPress={onTogglePasswordConfirmVisibility}
        caption={passwordErrorMessage}
      />

      <InputLabel
        size="L"
        label={INPUT_LABELS.NAME}
        placeholder={INPUT_PLACEHOLDERS.NAME}
        value={formData.name}
        onChange={(value) => updateField('name', value)}
      />

      <InputWithButton
        size="L"
        label={INPUT_LABELS.PHONE}
        placeholder={INPUT_PLACEHOLDERS.PHONE}
        value={formData.phone}
        onChange={(value) => updateField('phone', value)}
        caption={
          phoneErrorMessage
            ? phoneErrorMessage
            : isVerificationCodeSent
            ? '인증번호를 전송했습니다.'
            : undefined
        }
        buttonTitle={isVerificationCodeSent ? '다시 전송하기' : '인증번호 전송'}
        onButtonPress={onSendVerificationCode}
        buttonDisabled={!formData.phone || formData.phone.length === 0}
        buttonWidth={120}
      />

      {isVerificationCodeSent && (
        <InputWithButton
          size="L"
          label={INPUT_LABELS.VERIFICATION_CODE}
          placeholder={INPUT_PLACEHOLDERS.VERIFICATION_CODE}
          value={formData.verificationCode}
          onChange={(value) => updateField('verificationCode', value)}
          caption={verificationMessage}
          buttonTitle="인증번호 확인"
          onButtonPress={onVerifyCode ?? (() => {})}
          buttonDisabled={
            !formData.verificationCode ||
            formData.verificationCode.trim().length === 0
          }
          buttonWidth={120}
        />
      )}
    </S.InputSection>
  );
};
