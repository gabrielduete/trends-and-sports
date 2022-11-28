import axios from 'axios'

export const getData = async () => {
  const response = await axios.get(
    'https://esportes-and-trends.herokuapp.com/trends/1'
  )

  return response
}

export default getData
