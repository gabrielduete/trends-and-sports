import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '.'

describe('<Home />', () => {
  beforeEach(() => {
    render(<Home name='' />, { wrapper: BrowserRouter })
  })

  it('should render texts and links home correctly', () => {
    const title = screen.getByText(
      'Explore os assuntos do momento e notícias de esportes!'
    )

    const textSee = screen.getByText('Veja:')

    const linkTrends = screen.getByText('Assuntos do momento')
    const linkSports = screen.getByText('Esportes')

    expect(title).toBeInTheDocument()
    expect(textSee).toBeInTheDocument()
    expect(linkTrends).toBeInTheDocument()
    expect(linkSports).toBeInTheDocument()
  })
})
