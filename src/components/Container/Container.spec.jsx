import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Container from '.'

describe('<Container />', () => {
  beforeEach(() => {
    render(<Container content=':gabcast: nos testes' />, {
      wrapper: BrowserRouter,
    })
  })

  it('should render titles correctly', () => {
    const titleTrends = screen.getByText('Assuntos do momento')
    const sportsTrends = screen.getByText('Esportes')

    expect(titleTrends).toBeInTheDocument()
    expect(sportsTrends).toBeInTheDocument()
  })

  it('should render content correctly', () => {
    const content = screen.getByText(':gabcast: nos testes')

    expect(content).toBeInTheDocument()
  })
})
