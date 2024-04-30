// PerfilHeader/index.tsx

import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import {
  PerfilHeaderBar,
  LogoImage,
  HeaderContainer,
  CartButton,
  HomeLink
} from './styles'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { RootReducer } from '../../store'

const PerfilHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const cartQuantity = items.length

  return (
    <PerfilHeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <HeaderContainer>
        <HomeLink to="/">Restaurantes</HomeLink>
        <LogoImage src={logo} alt="efood" />
        <CartButton onClick={openCart}>
          <span>{cartQuantity} produto(s) no carrinho</span>
        </CartButton>
      </HeaderContainer>
    </PerfilHeaderBar>
  )
}

export default PerfilHeader
