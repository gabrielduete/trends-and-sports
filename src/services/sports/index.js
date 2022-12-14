import axios from 'axios'

const apiToken = 'live_1afce9733e36c80307d3fd341f7bea'

export const getData = async () => {
  const response = await axios.get(
    `https://api.api-futebol.com.br/v1/campeonatos/`,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  )

  return response
}

export const getCamp = async () => {
  const response = await axios.get(
    `https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/1`,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  )

  return response
}

export default { getCamp, getData }
