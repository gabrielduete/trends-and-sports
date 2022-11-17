import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

function Container({ title, content }) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperTexts>
          <S.Title>{title}</S.Title>
        </S.WrapperTexts>
        {content}
      </S.Wrapper>
    </S.Container>
  )
}

export default Container

Container.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
}
