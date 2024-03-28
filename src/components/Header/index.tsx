import { HeaderBar, HeaderTitle, LogoImage } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <LogoImage src={logo} alt="CHEF" />
    <HeaderTitle>
      Navegue pela seleção do Chef e escolha entra as diversificadas opções dos
      melhores restaurantes gastronômicos.
    </HeaderTitle>
  </HeaderBar>
)

export default Header
