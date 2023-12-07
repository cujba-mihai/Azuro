import React from 'react'
import * as S from '../styles/styles'
import * as Typography from 'components/Typography'
import * as Buttons from "components/Buttons"
import i18n from '../../../../i18n'

interface IFinishButtonProps { }

export const FinishButton = () => {
    return (

        <S.BoxShadow>
            <Buttons.ButtonLinkComponent to="/select-insurance">
                <Typography.ButtonText >
                    {i18n.t('start')}
                </Typography.ButtonText>
            </Buttons.ButtonLinkComponent>

        </S.BoxShadow>
    )
}

export default FinishButton