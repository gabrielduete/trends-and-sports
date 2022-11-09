import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Input from './Input'

describe('<LoginPage />', () => {
  it('should render input text correctly', () => {
    render(<Input placeholder='Digite seu nome' type='text' />)

    const placeholder = screen.getByPlaceholderText('Digite seu nome')

    expect(placeholder).toBeInTheDocument()
  })

  it('should render input file correctly', () => {
    render(
      <Input placeholder='Envie uma foto' type='file' onChange={() => {}} />
    )

    const placeholder = screen.getByText('Envie uma foto')

    expect(placeholder).toBeInTheDocument()
  })
})
