// PerfilHeader/styles.ts
// PerfilHeader/styles.ts
import styled from 'styled-components'
import { colors } from '../../styles'

export const PerfilHeaderBar = styled.header`
  background-color: ${colors.beige_dark};
  color: ${colors.salmon_light};
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
  text-align: center;
`

export const LogoImage = styled.img`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`

export const HeaderText = styled.h3`
  text-align: left;
  margin-left: 6px;
`

export const Cart = styled.h3`
  text-align: right;
  margin-left: 6px;
`
