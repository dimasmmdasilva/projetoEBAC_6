// Cart/index.tsx
import React, { useRef, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { CartContainer, CartItem, Overlay, Sidebar } from './styles'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const cartRef = useRef<HTMLDivElement>(null)

  const closeCart = useCallback(() => {
    dispatch(close())
  }, [dispatch])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        closeCart()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, closeCart])

  return (
    <>
      {isOpen && <Overlay onClick={closeCart} />}
      <CartContainer isOpen={isOpen} ref={cartRef}>
        <Sidebar>
          <ul>
            <CartItem>
              <img src="{}" alt="Imagem do item" />
              <div>
                <h3>nome da refeição</h3>
                <p>R$xxx,xx</p>
              </div>
              <button />
            </CartItem>
          </ul>
          <p>total: R$xxx,xx</p>
          <button>continuar a compra</button>
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart
