import { PerfilHeaderBar, LogoImage } from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const PerfilHeader = () => (
  <PerfilHeaderBar style={{ backgroundImage: `url(${fundo})` }}>
    <h3>Home</h3>
    <LogoImage src={logo} alt="CHEF" />
    <h3>Carrinho ( 0 )</h3>
  </PerfilHeaderBar>
)

export default PerfilHeader
