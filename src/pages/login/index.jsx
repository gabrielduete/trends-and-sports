import React from 'react'
import * as S from './styles'
import Input from './components/Buttons/Inputs/Input'

function LoginPage() {
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
          <Input
            type='text'
            placeholder='Digite seu nome'
            onChange={() => {}}
          />
          <Input
            type='file'
            placeholder='Digite seu nome'
            onChange={() => {}}
          />
        </S.WrapperForm>
      </S.Wrapper>
    </S.Container>
  )
}

export default LoginPage
