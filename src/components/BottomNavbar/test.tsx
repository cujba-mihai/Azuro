import React from 'react'
import { render, screen } from 'utils/test-utils'

import BottomNavbar from '.'

describe('<BottomNavbar />', () => {
  it('should render the text correctly', () => {
    render(<BottomNavbar />)

    expect(screen.getByText(/BottomNavbar/i)).toBeTruthy()
  })
})
