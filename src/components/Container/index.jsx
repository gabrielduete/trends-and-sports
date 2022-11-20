import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

function Container({ content }) {
  const currentPath = window.location.pathname

  const [isTrends, setIsTrends] = useState(currentPath)

  const validatePath = isTrends === '/trends'

  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperTexts>
          <S.Title
            to='/trends'
            onClick={() => setIsTrends(currentPath)}
            isTrends={validatePath}
          >
            Assuntos do momento
          </S.Title>
          <S.Title
            to='/esportes'
            onClick={() => setIsTrends(currentPath)}
            isTrends={!validatePath}
          >
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
