import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import Input from './components/Inputs/index'
import ButtonExplorer from './components/Button'

function LoginPage({ setUserName }) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperImage>
          <S.Image
            src='https://media.discordapp.net/attachments/628083207438598144/1038647106841358406/image.png'
            aria-hidden='true'
          />
        </S.WrapperImage>
        <S.WrapperForm>
          <div>
            <S.Title>BEM VINDO(A)!</S.Title>
            <S.SubTitle>Explore os assuntos do momento + esportes!</S.SubTitle>
          </div>
          <S.WrapperButtons>
            <Input
              type='text'
              placeholder='Digite seu nome'
              onChange={setUserName}
            />
            {/* <Input
              type='file'
              placeholder='Envie uma foto'
              onChange={() => {}}
            /> */}
            <ButtonExplorer type='submit' text='EXPLORAR' redirectUrl='/home' />
            {/* TODO: CHANGE HREF WITH COPNFIGURATION ROUTES */}
            <S.LinkHome to='/home'>Entrar sem perfil</S.LinkHome>
          </S.WrapperButtons>
        </S.WrapperForm>
      </S.Wrapper>
    </S.Container>
  )
}

export default LoginPage

LoginPage.propTypes = {
  setUserName: PropTypes.node.isRequired,
}
