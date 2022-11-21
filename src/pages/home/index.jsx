import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import UserInfos from './components/UserInfos'

function Home({ name }) {
  return (
    <S.Container>
      <S.ContentTexts>
        <UserInfos name={name} />
        <S.WrapperInfo>
          <h1>
            Aqui você encontra os assuntos do momento do twitter e notícias
            atuais de esportes!
          </h1>
          <p>Deseja ver:</p>
        </S.WrapperInfo>
        <S.Button to='/trends'>Assuntos do momento</S.Button>
        <S.Button to='/esportes'>Esportes</S.Button>
      </S.ContentTexts>
    </S.Container>
  )
}

export default Home

Home.propTypes = {
  name: PropTypes.string.isRequired,
}
