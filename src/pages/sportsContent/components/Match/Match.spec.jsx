import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Match from '.'

describe('<Match />', () => {
  const mockMatch = {
    name: 'Campeonato Brasileiro',
    date: '10/10/10',
    score: '1x0',
    status: 'finalizado',
  }

  beforeEach(() => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Match {...mockMatch} />)
  })

  it('should render component correctly', () => {
    Object.keys(mockMatch).forEach(key => {
      expect(screen.getByText(mockMatch[key])).toBeInTheDocument()
    })
  })
})
