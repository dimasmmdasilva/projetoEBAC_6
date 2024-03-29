import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.beige_dark};
  padding: 42px 0;

  p {
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    margin-top: 32px;
  }
`

export const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;

  img {
    width: 100px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
  justify-content: center;

  img {
    width: 40px;
    margin-right: 24px;
  }
`

export default FooterContainer
