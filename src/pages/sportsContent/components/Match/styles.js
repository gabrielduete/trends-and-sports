import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px 20px;

  &&:hover {
    background-color: #080808;
  }
`

export const Name = styled.h1`
  color: #ffff;
  font-size: 1.2em;
  font-weight: 600;
`

export const Score = styled.p`
  font-size: 0.9em;
  color: #535559;
  border-style: none;
  margin-top: 2px;
  text-decoration: none;
`

export const Date = styled.p`
  font-size: 0.9em;
  color: #535559;
  border-style: none;
  text-decoration: none;
  margin-top: 8px;
`

export const Status = styled.p`
  font-size: 0.8em;
  color: #535559;
  border-style: none;
  text-decoration: none;
  margin-top: 8px;
`
