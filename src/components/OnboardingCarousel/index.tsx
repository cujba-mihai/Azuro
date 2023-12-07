import * as S from './styles/styles'
import { SkipButton } from '../Buttons/SkipButton'
import CarouselProgress, { ONBOARDING_STEPS } from './cards/CarouselProgress'
import { useState } from 'react'
import { StepCard } from './cards/StepCard'
import ContinueButton from './buttons/ContinueButton'
import FinishButton from './buttons/FinishButton'

const numberOfSteps = ONBOARDING_STEPS.length - 1

export const OnboardingCarousel = () => {
  const [step, setStep] = useState(0)

  const handleNextStep = () => {
    if (step < numberOfSteps) {
      setStep((prev) => prev + 1)
    }
  }

  const handleSkip = () => {
    setStep(numberOfSteps)
  }

  return (
    <S.Container>
      <SkipButton to="select-insurance" />

      <S.StyledCard mode="contained">
        <StepCard step={step} />

        <S.MarginTop30>
          <CarouselProgress step={step} />
        </S.MarginTop30>
      </S.StyledCard>

      {step < numberOfSteps ? (
        <ContinueButton handleNextStep={handleNextStep} />
      ) : (
        <FinishButton />
      )}
    </S.Container>
  )
}
