import React from 'react'
import * as S from './styles'

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
          <S.Title data-testid='a'>BEM VINDO(A)!</S.Title>
          <S.SubTitle>Explore os assuntos do momento + esportes!</S.SubTitle>
        </S.WrapperForm>
      </S.Wrapper>
    </S.Container>
  )
}

export default LoginPage
