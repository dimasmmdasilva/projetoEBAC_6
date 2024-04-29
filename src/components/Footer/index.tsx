// Footer/index.tsx

import logo from '../../assets/images/logo.png'
import { FooterContainer, FooterInfo, FooterLogo, Links } from './styles'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'

const Footer = () => (
  <FooterContainer>
    <FooterLogo>
      <img src={logo} alt="CHEF" />
    </FooterLogo>
    <Links>
      <img src={instagram} alt="INSTAGRAM" />
      <img src={facebook} alt="FACEBOOK" />
      <img src={twitter} alt="TWITTER" />
    </Links>
    <FooterInfo>
      A efood é uma FooterInfolataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelFooterInfocimento contratado.
    </FooterInfo>
  </FooterContainer>
)

export default Footer
