import { HeaderBar, HeaderTitle, LogoImage } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <LogoImage src={logo} alt="CHEF" />
    <HeaderTitle>Gastronomia Especial do Chef</HeaderTitle>
  </HeaderBar>
)

export default Header
