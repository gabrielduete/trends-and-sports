import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import Input from './components/Inputs/index'
import ButtonExplorer from './components/Button'

function LoginPage({ name, setUserName }) {
  const haveSpace = name?.indexOf(' ') >= 0

  const isInvalidName = name === '' || name === undefined || haveSpace

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
              placeholder='Digite seu primeiro nome ou apelido'
              onChange={setUserName}
            />
            {haveSpace && (
              <S.MessageInvalidName>
                Apenas seu primeiro nome ou apelido! Sem espaços!
              </S.MessageInvalidName>
            )}
            <ButtonExplorer
              type='submit'
              text='EXPLORAR'
              redirectUrl='/home'
              disabled={isInvalidName}
            />
            <S.LinkHome to='/home'>Entrar sem perfil</S.LinkHome>
          </S.WrapperButtons>
        </S.WrapperForm>
      </S.Wrapper>
    </S.Container>
  )
}

export default LoginPage

LoginPage.propTypes = {
  name: PropTypes.string.isRequired,
  setUserName: PropTypes.node.isRequired,
}
