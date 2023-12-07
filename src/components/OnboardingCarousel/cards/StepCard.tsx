import React from 'react'
import { Card } from 'react-native-paper'
import * as S from '../styles/styles'
import * as Typography from 'components/Typography'
import { ONBOARDING_STEPS } from './CarouselProgress'
import i18n from '../../../../i18n'

interface IStepCardProps {
  step: Extract<keyof typeof ONBOARDING_STEPS, number>
}

const CardCoverMapping = [
  <S.FirstScreenImage />,
  <S.SecondScreenImage />,
  <S.ThirdScreenImage />
]

export const StepCard = ({ step }: IStepCardProps) => {
  return (
    <>
      <S.CardCoverContainer>
        <S.CircleBackground />
        {CardCoverMapping[step]}
      </S.CardCoverContainer>

      <S.MarginTop30>
        <Card.Content>
          <Typography.CardHeader>
            {i18n.t(`onboarding.step${step + 1}.title`)}
          </Typography.CardHeader>

          <S.MarginTop15>
            <Typography.CardSubheader>
              {i18n.t(`onboarding.step${step + 1}.subtitle`)}
            </Typography.CardSubheader>
          </S.MarginTop15>
        </Card.Content>
      </S.MarginTop30>
    </>
  )
}
