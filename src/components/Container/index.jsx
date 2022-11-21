import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

function Container({ content }) {
  const currentPath = window.location.pathname

  const isTrends = currentPath === '/trends'

  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperTexts>
          <S.Title to='/trends' isTrends={isTrends}>
            Assuntos do momento
          </S.Title>
          <S.Title to='/esportes' isTrends={!isTrends}>
            Esportes
          </S.Title>
        </S.WrapperTexts>
        {content}
      </S.Wrapper>
    </S.Container>
  )
}

export default Container

Container.propTypes = {
  content: PropTypes.node.isRequired,
}
