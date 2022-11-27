import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ContentTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const WrapperInfo = styled.div`
  max-width: 320px;

  h1 {
    color: #dbdbdb;
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  @media (max-width: 450px) {
    max-width: 250px;
  }
`

export const Button = styled(Link)`
  font-size: 1.2em;
  font-weight: 100;
  cursor: pointer;
  color: #71767b;
  display: inline-block;
  text-decoration: none;
  transition-property: transform;
  transition: 0.25s ease;

  &&::after {
    content: '';
    border-top: 4px solid #0061ca;
    width: 100%;
    position: absolute;
    display: block;
    transform: rotateY(90deg);
    transition: transform 0.25s linear;
  }

  &&:hover {
    color: #0061ca;
    transform: scale(1);
  }

  &&:hover::after {
    transform: rotate(0deg);
  }
`
