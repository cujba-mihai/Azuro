import React from 'react'
import i18n from '../../../i18n'
import * as S from '../OnboardingCarousel/styles/styles'
import { ButtonLinkComponent } from "components/Buttons";

interface ISkipButtonProps {
    to: string;
}
export const SkipButton = ({ to }: ISkipButtonProps) => {
    return (
        <S.SkipBtnContainer>
            <ButtonLinkComponent ghost to={to}>
                {i18n.t('skip')}
            </ButtonLinkComponent>
        </S.SkipBtnContainer>
    )
}