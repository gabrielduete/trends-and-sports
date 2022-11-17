import React, { useEffect, useState, useCallback } from 'react'
import { getCamp } from '../../services/sports'
import Match from './components/Match'

import Container from '../../components/Container'

function EsportsContent() {
  const [camps, setCamps] = useState()

  const handleCampsData = useCallback(async () => {
    const { data } = await getCamp()

    setCamps(data.partidas)
  }, [])

  useEffect(() => {
    handleCampsData()
  }, [handleCampsData])

  return (
    <Container
      title='Esportes'
      content={
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
      }
    />
  )
}

export default EsportsContent
