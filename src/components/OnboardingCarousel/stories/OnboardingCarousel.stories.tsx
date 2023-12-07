import { ComponentMeta, ComponentStoryObj } from '@storybook/react-native';
import { OnboardingCarousel } from '../index';

const OnboardingCarouselMeta: ComponentMeta<typeof OnboardingCarousel> = {
    title: 'OnboardingCarousel',
    component: OnboardingCarousel,
    argTypes: {},
    args: {},
};

export default OnboardingCarouselMeta;

type OnboardingCarouselStory = ComponentStoryObj<typeof OnboardingCarousel>;

export const Basic: OnboardingCarouselStory = {};