import { Checkbox } from '@design-system/index';
import React from 'react';

import { AGREEMENT_LABELS } from '../../constants';
import type { AgreementState } from '../../hooks/useAgreement';

import * as S from './AgreementSection.styled';

type AgreementSectionProps = {
  agreement: AgreementState;
  onAgreeAll: () => void;
  onAgreeTerms: () => void;
  onAgreePrivacy: () => void;
  onAgreeMarketing: () => void;
  onViewTerms?: () => void;
  onViewPrivacy?: () => void;
  onViewMarketing?: () => void;
};

export const AgreementSection = ({
  agreement,
  onAgreeAll,
  onAgreeTerms,
  onAgreePrivacy,
  onAgreeMarketing,
  onViewTerms,
  onViewPrivacy,
  onViewMarketing,
}: AgreementSectionProps) => {
  return (
    <S.AgreementSection>
      <Checkbox
        checked={agreement.agreeAll}
        onPress={onAgreeAll}
        label={AGREEMENT_LABELS.ALL}
      />

      <Checkbox
        checked={agreement.agreeTerms}
        onPress={onAgreeTerms}
        label={AGREEMENT_LABELS.TERMS}
        rightAction={
          <S.ViewLink onPress={onViewTerms || (() => {})}>
            <S.ViewLinkText>보기 {'>'}</S.ViewLinkText>
          </S.ViewLink>
        }
      />

      <Checkbox
        checked={agreement.agreePrivacy}
        onPress={onAgreePrivacy}
        label={AGREEMENT_LABELS.PRIVACY}
        rightAction={
          <S.ViewLink onPress={onViewPrivacy || (() => {})}>
            <S.ViewLinkText>보기 {'>'}</S.ViewLinkText>
          </S.ViewLink>
        }
      />

      <Checkbox
        checked={agreement.agreeMarketing}
        onPress={onAgreeMarketing}
        label={AGREEMENT_LABELS.MARKETING}
        rightAction={
          <S.ViewLink onPress={onViewMarketing || (() => {})}>
            <S.ViewLinkText>보기 {'>'}</S.ViewLinkText>
          </S.ViewLink>
        }
      />
    </S.AgreementSection>
  );
};
