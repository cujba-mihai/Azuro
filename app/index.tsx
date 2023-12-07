import React from "react";

// import Storybook from '../.storybook'
import { OnboardingCarousel } from "components/OnboardingCarousel";

const index = () => {
  return <OnboardingCarousel />;
};

const AppEntryPoint = index;

// if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
//   AppEntryPoint = Storybook
// }

export default AppEntryPoint;
