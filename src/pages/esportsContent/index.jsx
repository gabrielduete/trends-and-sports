import React, { useEffect, useState, useCallback } from 'react'
import { getCamp } from '../../services/sports'
import Match from './components/Match'
import WrapperSpinner from '../trendsContent/styles'
import SpinnerLoading from '../../components/SpinnerLoading'

import Container from '../../components/Container'

function EsportsContent() {
  const [camps, setCamps] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const handleCampsData = useCallback(async () => {
    try {
      const { data } = await getCamp()
      setCamps(data.partidas)
      setIsLoading(true)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error request trends', error)
      setIsLoading(true)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    handleCampsData()
  }, [handleCampsData])

  return (
    <Container
      content={
        isLoading ? (
          <WrapperSpinner>
            <SpinnerLoading />
          </WrapperSpinner>
        ) : (
          <section>
            {camps?.map(camp => (
              <Match
                name={camp.campeonato.nome}
                score={camp.placar}
                date={camp.data_realizacao}
                status={camp.status}
              />
            ))}
          </section>
        )
      }
    />
  )
}

export default EsportsContent
