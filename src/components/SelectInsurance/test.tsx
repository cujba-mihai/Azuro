import React from 'react'
import { render, screen } from 'utils/test-utils'

import { SelectInsurance } from './index'

describe('SelectInsurance', () => {
  it('should render the text correctly', () => {
    render(<SelectInsurance />)

    expect(screen.getByText(/SelectInsurance/i)).toBeTruthy()
  })
})
