import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100vh;
  margin: 0 40px;

  @media (max-width: 450px) {
    margin: 0 5px;
  }
`

export const Wrapper = styled.div`
  background-color: #0c0c0c;
  border-radius: 3px;
  display: flex;
`

export const WrapperImage = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const Image = styled.img`
  max-width: 100%;
`

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #03376f;
  padding: 100px;
  gap: 60px;
  border-radius: 3px;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    padding: 80px 10px;
  }
`

export const Title = styled.h1`
  font-size: 3.2em;
  font-weight: 400;
`

export const SubTitle = styled.h2`
  font-size: 1.2em;
  font-weight: 100;
  margin-left: 3px;
`

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Link = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  align-self: center;
  font-size: 0.8em;
`
