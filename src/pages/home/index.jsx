import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import UserInfos from './components/UserInfos'

function Home({ name }) {
  return (
    <S.Container>
      <S.ContentTexts>
        <UserInfos name={name} />
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
