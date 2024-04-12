// PerfilHeader/index.tsx
import {
  PerfilHeaderBar,
  LogoImage,
  HeaderText,
  Cart,
  HeaderContainer
} from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const PerfilHeader = () => (
  <PerfilHeaderBar style={{ backgroundImage: `url(${fundo})` }}>
    <HeaderContainer>
      <HeaderText>Home</HeaderText>
      <LogoImage src={logo} alt="efood" />
      <Cart>Carrinho ( 0 )</Cart>
    </HeaderContainer>
  </PerfilHeaderBar>
)

export default PerfilHeader
