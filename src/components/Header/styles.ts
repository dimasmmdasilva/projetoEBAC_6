import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.beige_dark};
  height: 384px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  position: relative;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
`

export const HeaderTitle = styled.h2`
  color: ${colors.salmon_light};
  width: 539px;
  height: 84px;
  line-height: 42.19px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 900;
`

export const LogoImage = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 50px;
  margin-bottom: 120px;
`
