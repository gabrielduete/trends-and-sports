import React, { useState, useEffect, useCallback } from 'react'
import { getData } from '../../services/twitter/index'
import Trend from './trend'

import * as S from './styles'

function TrendsContent() {
  const [trends, setTrends] = useState()

  const handleTrendsData = useCallback(async () => {
    const { data } = await getData()

    setTrends(data.trends)
  }, [])

  useEffect(() => {
    handleTrendsData()
  }, [handleTrendsData])

  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperTexts>
          <S.Title>Assuntos do momento</S.Title>
        </S.WrapperTexts>
        <section>
          {trends?.map(trend => (
            <Trend
              name={trend.name}
              url={trend.url}
              tweetVolume={trend.tweet_volume}
            />
          ))}
        </section>
      </S.Wrapper>
    </S.Container>
  )
}

export default TrendsContent
