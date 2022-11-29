import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Trend from '.'

describe('<Container />', () => {
  const mockTrend = {
    name: 'GabCast',
    url: 'gabtest.com',
    tweetVolume: 200,
  }

  beforeEach(() => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Trend {...mockTrend} />, {
      wrapper: BrowserRouter,
    })
  })

  it('should render component correctly', () => {
    expect(screen.getByText('GabCast')).toBeInTheDocument()
    expect(screen.getByText('200 Tweets')).toBeInTheDocument()
    expect(screen.getByText('Clique para ver no twitter')).toBeInTheDocument()
  })
})
