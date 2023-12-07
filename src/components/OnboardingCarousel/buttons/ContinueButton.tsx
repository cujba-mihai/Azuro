import React from "react";
import * as S from "../styles/styles";
import i18n from "../../../../i18n";

interface IContinueButtonProps {
  handleNextStep: () => void;
}

export const ContinueButton = ({ handleNextStep }: IContinueButtonProps) => {
  return (
    <S.BoxShadow>
      <S.ContinueButton onPress={handleNextStep}>
        <S.ContinueButtonText>{i18n.t("continue")}</S.ContinueButtonText>
      </S.ContinueButton>
    </S.BoxShadow>
  );
};

export default ContinueButton;
