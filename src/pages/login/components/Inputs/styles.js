import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  outline: none;
  height: 30px;
  border-radius: 3px;
  border: none;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  text-indent: 10px;
  font-size: 0.8em;
`

export const InputFile = styled.input`
  display: none;
`

export const Wrapperlabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: #ffffff;
  height: 30px;
  color: #000000;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-size: 13px;
  transition: 0.4s;
  transition-duration: 0.6s;

  &:active {
    background-color: rgba(255, 255, 255, 0.5);
  }
`
