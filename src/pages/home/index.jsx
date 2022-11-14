import React from 'react'
import * as S from './styles'
import UserInfos from './components/UserInfos'

function Home() {
  return (
    <S.Container>
      <S.ContentTexts>
        <UserInfos />
        <S.TitleSection>Assuntos do momento</S.TitleSection>
        <S.TitleSection>Esportes</S.TitleSection>
      </S.ContentTexts>
    </S.Container>
  )
}

export default Home
