import styled from 'styled-components'

const CustomButton = styled.button`
  background-color: #0061ca;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
  height: 30px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
  transition: 0.4s;
  transition-duration: 0.6s;

  &:hover {
    background-color: #ffffff;
    color: #0061ca;
  }
`

export default CustomButton
