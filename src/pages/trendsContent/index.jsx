import React, { useState, useEffect, useCallback } from 'react'
import { getData } from '../../services/twitter/index'
import Trend from './trend'
import Container from '../../components/Container'

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
    <Container
      title='Assuntos do momento'
      content={
        <section>
          {trends?.map(trend => (
            <Trend
              name={trend.name}
              url={trend.url}
              tweetVolume={trend.tweet_volume}
            />
          ))}
        </section>
      }
    />
  )
}

export default TrendsContent
