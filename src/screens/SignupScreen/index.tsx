import { useModal } from '@contexts/ModalProvider';
import { Button, Modal } from '@design-system/index';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@src/navigation/navigation.types';
import React, { useState } from 'react';

import { InputSection, AgreementSection } from './components';
import { useAgreement } from './hooks/useAgreement';
import { useSignupForm } from './hooks/useSignupForm';
import * as S from './SignupScreen.styles';
import { isFormValid, isValidVerificationCode } from './utils/validation';

export default function SignupScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { setIsOpen, setModalContent } = useModal();

  const {
    formData,
    updateField,
    isPasswordVisible,
    isPasswordConfirmVisible,
    isVerificationCodeSent,
    phoneErrorMessage,
    togglePasswordVisibility,
    togglePasswordConfirmVisibility,
    sendVerificationCode,
  } = useSignupForm();

  const [idCheckMessage, setIdCheckMessage] = useState<string | undefined>();
  const [verificationMessage, setVerificationMessage] = useState<
    string | undefined
  >();

  const {
    agreement,
    handleAgreeAll,
    handleAgreeTerms,
    handleAgreePrivacy,
    handleAgreeMarketing,
  } = useAgreement();

  const handleDuplicateCheck = () => {
    const id = formData.id.trim();

    if (!id) {
      setIdCheckMessage('아이디를 입력해야 합니다.');
      return;
    }

    if (id.length < 8) {
      setIdCheckMessage('아이디는 8자 이상이어야 합니다.');
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(id)) {
      setIdCheckMessage('아이디는 영문, 숫자만 사용할 수 있습니다.');
      return;
    }

    // TODO: 실제 API 연동 시 서버 응답에 따라 메시지를 변경합니다.
    // 임시 로직으로 "testuser" 아이디를 "이미 사용 중"으로 처리합니다.
    if (id.toLowerCase() === 'testuser') {
      setIdCheckMessage('이미 사용 중인 아이디입니다.');
    } else {
      setIdCheckMessage('사용 가능한 아이디입니다.');
    }
  };

  const handleSendVerificationCode = async () => {
    await sendVerificationCode();
  };

  const handleVerifyCode = () => {
    const code = formData.verificationCode.trim();

    if (!code) {
      setVerificationMessage('인증번호를 입력해야 합니다.');
      return;
    }

    if (!isValidVerificationCode(code)) {
      setVerificationMessage('인증번호가 올바르지 않습니다.');
      return;
    }

    // TODO: 실제 서버 검증 로직으로 교체
    setVerificationMessage('인증번호가 확인되었습니다.');
  };

  const handleSignup = () => {
    if (isFormValid(formData, agreement)) {
      // TODO: 회원가입 로직
      setModalContent(
        <Modal
          title="회원가입 완료"
          content={'회원가입이 완료되었습니다.\n메인으로 이동합니다.'}
          buttonType="single"
          onCancel={() => {}}
          onConfirm={() => {
            navigation.reset({ routes: [{ name: 'Tabs' }] });
          }}
        />
      );
      setIsOpen(true);
    }
  };

  return (
    <S.SafeWrapper>
      <S.ScrollContainer>
        <S.Container>
          <InputSection
            formData={formData}
            updateField={updateField}
            isPasswordVisible={isPasswordVisible}
            isPasswordConfirmVisible={isPasswordConfirmVisible}
            isVerificationCodeSent={isVerificationCodeSent}
            onTogglePasswordVisibility={togglePasswordVisibility}
            onTogglePasswordConfirmVisibility={togglePasswordConfirmVisibility}
            onDuplicateCheck={handleDuplicateCheck}
            onSendVerificationCode={handleSendVerificationCode}
            idCheckMessage={idCheckMessage}
            passwordErrorMessage={
              formData.passwordConfirm.length > 0 &&
              formData.password !== formData.passwordConfirm
                ? '비밀번호가 일치하지 않습니다.'
                : undefined
            }
            phoneErrorMessage={phoneErrorMessage}
            verificationMessage={verificationMessage}
            onVerifyCode={handleVerifyCode}
          />
          <AgreementSection
            agreement={agreement}
            onAgreeAll={handleAgreeAll}
            onAgreeTerms={handleAgreeTerms}
            onAgreePrivacy={handleAgreePrivacy}
            onAgreeMarketing={handleAgreeMarketing}
          />
          <Button
            title="시작하기"
            size="L"
            status={isFormValid(formData, agreement) ? 'Default' : 'Disabled'}
            onPress={handleSignup}
          />
        </S.Container>
      </S.ScrollContainer>
    </S.SafeWrapper>
  );
}
