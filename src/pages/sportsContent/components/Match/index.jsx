import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

function Match({ name, score, status, date }) {
  return (
    <S.Wrapper>
      <S.Name>{score}</S.Name>
      <S.Score>{name}</S.Score>
      <S.Date>{date}</S.Date>
      <S.Status>{status}</S.Status>
    </S.Wrapper>
  )
}

export default Match

Match.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
}
