import React, { useState, useEffect, useCallback } from 'react'
import { getData } from '../../services/twitter/index'
import Trend from './components/trend'
import Container from '../../components/Container'
import SpinnerLoading from '../../components/SpinnerLoading'
import WrapperSpinner from './styles'

function TrendsContent() {
  const [trends, setTrends] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const handleTrendsData = useCallback(async () => {
    try {
      const { data } = await getData()
      setTrends(data.trends)
      setIsLoading(true)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error request trends', error)
      setIsLoading(true)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    handleTrendsData()
  }, [handleTrendsData])

  return (
    <Container
      content={
        <>
          {isError && (
            <p>
              Muitas requisições foram feitas e estorou o limite por hoje! :(
              Volte amanhã, por favor!
            </p>
          )}
          {isLoading ? (
            <WrapperSpinner>
              <SpinnerLoading />
            </WrapperSpinner>
          ) : (
            <section>
              {trends?.map(trend => (
                <Trend
                  name={trend.name}
                  url={trend.url}
                  tweetVolume={trend.tweet_volume}
                />
              ))}
            </section>
          )}
        </>
      }
    />
  )
}

export default TrendsContent
