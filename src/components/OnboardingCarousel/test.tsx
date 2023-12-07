import React from 'react'
import { render, screen } from 'utils/test-utils'

import { OnboardingCarousel } from './index'

describe('OnboardingCarousel', () => {
  it('should render the text correctly', () => {
    render(<OnboardingCarousel />)

    expect(screen.getByText(/OnboardingCarousel/i)).toBeTruthy()
  })
})
