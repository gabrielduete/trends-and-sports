import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const Wrapper = styled.div`
  border-left: 2px solid #ffff;
  border-right: 2px solid #ffff;
  height: 100%;
`

export const WrapperTexts = styled.div`
  display: flex;
`

export const Title = styled(Link)`
  font-weight: 100;
  border-bottom: 2px solid #0061ca;
  padding: 20px;
  margin: 0px 80px;
  text-align: center;
  color: ${({ isTrends }) => (isTrends ? '#ffff' : '#535559')};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.3em;

  @media (max-width: 599px) {
    margin: 0 auto;
  }
`
