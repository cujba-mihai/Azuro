import React from 'react'
import { render, screen } from 'utils/test-utils'

import { SplashScreen } from './index'

describe('<SplashScreen />', () => {
  it('should render the text correctly', () => {
    render(<SplashScreen />)
  })
})
