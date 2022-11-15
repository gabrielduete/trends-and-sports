import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

function Trend({ name, url, tweetVolume }) {
  return (
    <S.Wrapper onClick={() => window.open(`${url}`, '_blank')}>
      <S.Name>{name}</S.Name>
      <S.TextVolume>{tweetVolume?.toPrecision()} Tweets</S.TextVolume>
      <S.TextSee>Ver no twitter</S.TextSee>
    </S.Wrapper>
  )
}

Trend.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tweetVolume: PropTypes.number.isRequired,
}

export default Trend
