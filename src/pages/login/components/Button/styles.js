import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CustomButton = styled(Link)`
  background-color: #0061ca;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
  transition: 0.4s;
  transition-duration: 0.6s;
  font-size: 0.8em;

  &:hover {
    background-color: #ffffff;
    color: #0061ca;
  }
`

export default CustomButton
