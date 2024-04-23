// PerfilHeader/styles.ts
import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

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
  margin-left: 80px;
`

export const HeaderContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`

export const CartButton = styled.span`
  cursor: pointer; /* Adicione este estilo para indicar que é clicável */
  text-align: right;
  margin-right: -30px;
`

export const HomeLink = styled(Link)`
  color: ${colors.salmon_light};
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;
  line-height: 21.09px;
`
