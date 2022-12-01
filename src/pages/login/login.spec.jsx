import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import LoginPage from '.'

describe('<LoginPage />', () => {
  beforeEach(() => {
    render(<LoginPage name='  ' setUserName={() => {}} />, {
      wrapper: BrowserRouter,
    })
  })

  it('should render title correctly', () => {
    const title = screen.getByText('BEM VINDO(A)!')
    const subTitle = screen.getByText(
      'Explore os assuntos do momento + esportes!'
    )

    expect(title).toBeInTheDocument()
    expect(subTitle).toBeInTheDocument()
  })

  it('should render error menssage if name is invalid', () => {
    const messageInvalidName = screen.getByText(
      'Apenas seu primeiro nome ou apelido! Sem espaços!'
    )

    expect(messageInvalidName)
  })
})
