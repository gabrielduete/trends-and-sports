import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import UserInfos from '.'

describe('<UserInfos />', () => {
  it('should render name user correctly', () => {
    render(<UserInfos name=':gab-cast:' />)

    const userName = screen.getByText('Olá, :gab-cast:!')

    expect(userName).toBeInTheDocument()
  })

  it('should render unnamed user correctly', () => {
    render(<UserInfos name={undefined} />)

    const text = screen.getByText('Olá!')

    expect(text).toBeInTheDocument()
  })
})
