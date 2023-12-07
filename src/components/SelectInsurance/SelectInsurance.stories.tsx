import { ComponentMeta, ComponentStoryObj } from '@storybook/react-native'
import { SelectInsurance } from './index'

const SelectInsuranceMeta: ComponentMeta<typeof SelectInsurance> = {
  title: 'SelectInsurance',
  component: SelectInsurance,
  argTypes: {},
  args: {}
}

export default SelectInsuranceMeta

type SelectInsuranceStory = ComponentStoryObj<typeof SelectInsurance>

export const Basic: SelectInsuranceStory = {}
