import React from 'react'

import { ThemeProvider } from 'styled-components/native'


import { Slot } from 'expo-router'
import { RecoilRoot } from 'recoil'
import { LocalizedApp } from '../i18n'
import theme from 'styles/theme'

// Use this file to wrap your global providers.
const RootLayout = () => {
  return (
    <RecoilRoot>
      <LocalizedApp />
      <ThemeProvider theme={theme}>
        <Slot />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default RootLayout
