import styled from 'styled-components'

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

export const TitleSection = styled.h1`
  font-size: 1.2em;
  font-weight: 100;
  cursor: pointer;
  color: #71767b;
  display: inline-block;
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
