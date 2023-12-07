import React, { useCallback } from 'react'
import Constants from 'expo-constants'

// import Storybook from '../.storybook'
import Main from 'components/Main/index'
import { OnboardingCarousel } from 'components/OnboardingCarousel'

const index = () => {
  return <OnboardingCarousel />
}

let AppEntryPoint = index

// if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
//   AppEntryPoint = Storybook
// }

export default AppEntryPoint
