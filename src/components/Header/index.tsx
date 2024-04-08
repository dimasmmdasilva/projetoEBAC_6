import { HeaderBar, HeaderTitle, LogoImage } from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
    <LogoImage src={logo} />
    <HeaderTitle>
      Viva experiências gastronômicas no conforto da sua casa
    </HeaderTitle>
  </HeaderBar>
)

export default Header
