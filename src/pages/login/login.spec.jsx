import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import LoginPage from '.'

describe('<LoginPage />', () => {
  beforeEach(() => {
    render(<LoginPage />)
  })

  it('should render title correctly', () => {
    const title = screen.getByText('BEM VINDO(A)!')
    const subTitle = screen.getByText(
      'Explore os assuntos do momento + esportes!'
    )

    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
  })
})
