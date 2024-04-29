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

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const HeaderTitle = styled.h2`
  color: ${colors.salmon_light};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const LogoImage = styled.img`
  width: 100px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`
