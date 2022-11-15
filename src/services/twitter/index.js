// eslint-disable-next-line import/no-import-module-exports
import axios from 'axios'

// eslint-disable-next-line import/prefer-default-export
export const getData = async () => {
  const response = await axios.get(
    'https://esportes-and-trends.herokuapp.com/trends/1'
  )

  return response
}

module.export = { getData }
