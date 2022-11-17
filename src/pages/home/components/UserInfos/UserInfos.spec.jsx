import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import UserInfos from '.'

describe('<UserInfos />', () => {
  it('should render name and photo user correctly', () => {
    render(<UserInfos name=':gab-cast:' photo='' />)

    const userName = screen.getByText(':gab-cast:')

    expect(userName).toBeInTheDocument()
  })
})
