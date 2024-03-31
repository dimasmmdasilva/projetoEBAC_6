import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.beige_dark};
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const HeaderTitle = styled.h2`
  margin-left: 100px;
  margin-right: 100px;
  text-align: center;
  font-family: 'DM Sans', sans-serif;
`
export const LogoImage = styled.img`
  width: 150px;
  margin-top: 24px;
  margin-bottom: 24px;
  margin: auto;
`
