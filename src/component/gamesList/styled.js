import styled from 'styled-components'
// import { Link } from 'react-router-dom'

export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 180.5%;
  color: #ffffff;
  margin-top: 0;
`

export const Subtitle = styled.h4`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 187.5%;
  color: white;
  text-align: center;
  margin: 0;
`

export const Image = styled.img`
  justify-content: center;
  align-items: center;
  width: 305px;
  height: 172px;
  padding: 2rem 2rem 0;
  border-radius: 5%;
`

export const PlayButton = styled.a`
  background-color: orange;
  color: white;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-radius: 10px;
  padding: 11px 20px;
`
