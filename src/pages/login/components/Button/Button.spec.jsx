import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render button correctly', () => {
    render(<Button type='submit' text='Cansadão mané' onClick={() => {}} />)

    const button = screen.getByRole('button', { name: 'Cansadão mané' })

    expect(button).toBeInTheDocument()
  })
})
