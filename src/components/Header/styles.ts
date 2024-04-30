// Header/styles.ts

import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.beige_dark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`

export const HeaderTitle = styled.h2`
  color: ${colors.salmon_light};
  font-family: Roboto;
  width: 600px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  padding: 10px;
`

export const LogoImage = styled.img`
  width: 100px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`
