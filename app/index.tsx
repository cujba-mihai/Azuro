import React from 'react'
import Constants from 'expo-constants'


import Storybook from '../.storybook'
import Main from 'components/Main'

const index = () => {
  return <Main />
}

let AppEntryPoint = index

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = Storybook
}

export default AppEntryPoint
