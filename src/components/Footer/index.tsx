import logo from '../../assets/images/logo.png'
import FooterContainer, { FooterLogo, Links } from './styles'
import instagram from '../../assets/images/instagram.jpeg'
import whatsapp from '../../assets/images/whatsapp.jpeg'
import facebook from '../../assets/images/facebook.jpeg'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <FooterLogo>
      <img src={logo} alt="CHEF" />
    </FooterLogo>
    <Links>
      <img src={instagram} alt="INSTAGRAM" />
      <img src={facebook} alt="FACEBOOK" />
      <img src={whatsapp} alt="WHATSAPP" />
    </Links>
    <div>
      <p>{currentYear} - &copy; Gastronomia Especial do Chef</p>
    </div>
  </FooterContainer>
)

export default Footer
