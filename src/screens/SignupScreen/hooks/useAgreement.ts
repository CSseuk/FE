import { useState, useCallback } from 'react';

export type AgreementState = {
  agreeAll: boolean;
  agreeTerms: boolean;
  agreePrivacy: boolean;
  agreeMarketing: boolean;
};

export const useAgreement = () => {
  const [agreement, setAgreement] = useState<AgreementState>({
    agreeAll: false,
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  });

  const handleAgreeAll = useCallback(() => {
    const newValue = !agreement.agreeAll;
    setAgreement({
      agreeAll: newValue,
      agreeTerms: newValue,
      agreePrivacy: newValue,
      agreeMarketing: newValue,
    });
  }, [agreement.agreeAll]);

  const handleAgreeTerms = useCallback(() => {
    const newValue = !agreement.agreeTerms;
    const updated = {
      ...agreement,
      agreeTerms: newValue,
    };
    updated.agreeAll =
      updated.agreeTerms && updated.agreePrivacy && updated.agreeMarketing;
    setAgreement(updated);
  }, [agreement]);

  const handleAgreePrivacy = useCallback(() => {
    const newValue = !agreement.agreePrivacy;
    const updated = {
      ...agreement,
      agreePrivacy: newValue,
    };
    updated.agreeAll =
      updated.agreeTerms && updated.agreePrivacy && updated.agreeMarketing;
    setAgreement(updated);
  }, [agreement]);

  const handleAgreeMarketing = useCallback(() => {
    const newValue = !agreement.agreeMarketing;
    const updated = {
      ...agreement,
      agreeMarketing: newValue,
    };
    updated.agreeAll =
      updated.agreeTerms && updated.agreePrivacy && updated.agreeMarketing;
    setAgreement(updated);
  }, [agreement]);

  return {
    agreement,
    handleAgreeAll,
    handleAgreeTerms,
    handleAgreePrivacy,
    handleAgreeMarketing,
  };
};
