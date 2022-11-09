import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body{
    background-color: #000000;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }
`

export default GlobalStyle
