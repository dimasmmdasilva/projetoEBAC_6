import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.beige_dark};
  padding: 52px 0;
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 28px;

  img {
    width: 100px;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center; /* Alinha verticalmente com o Logo */
  margin-bottom: 100px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`

export const FooterInfo = styled.p`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
  max-width: 480px;
  color: ${colors.salmon_light};
`

export default FooterContainer
