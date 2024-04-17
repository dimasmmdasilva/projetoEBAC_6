// PerfilHeader/index.tsx
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'
import {
  PerfilHeaderBar,
  LogoImage,
  HeaderText,
  CartButton,
  HeaderContainer
} from './styles'
import carrinho from '../../assets/images/carrinho.svg'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'

const PerfilHeader = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <PerfilHeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <HeaderContainer>
        <HeaderText>Home</HeaderText>
        <LogoImage src={logo} alt="efood" />
        <CartButton onClick={openCart}>
          Carrinho ( 0 ) <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderContainer>
    </PerfilHeaderBar>
  )
}
export default PerfilHeader
