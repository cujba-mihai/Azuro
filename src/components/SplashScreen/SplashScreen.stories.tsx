import { ComponentMeta, ComponentStoryObj } from '@storybook/react-native'
import { SplashScreen } from './index'

const SplashScreenMeta: ComponentMeta<typeof SplashScreen> = {
  title: 'SplashScreen',
  component: SplashScreen,
  argTypes: {},
  args: {}
}

export default SplashScreenMeta

type SplashScreenStory = ComponentStoryObj<typeof SplashScreen>

export const Basic: SplashScreenStory = {}
