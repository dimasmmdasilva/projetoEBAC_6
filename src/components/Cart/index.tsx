// Cart/index.tsx

import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import { remove, clearCart } from '../../store/reducers/cart' // Adicionado
import Checkout from '../Checkout'
import Payment from '../Payment'
import Order from '../Order'
import {
  CartContainer,
  CartItem,
  Overlay,
  Sidebar,
  TotalPrice,
  ValorTotal
} from './styles'

enum CartStep {
  CART,
  CHECKOUT,
  PAYMENT,
  ORDER
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const cartRef = useRef<HTMLDivElement>(null)
  const [cartStep, setCartStep] = useState(CartStep.CART)

  const closeCart = useCallback(() => {
    dispatch(close())
  }, [dispatch])

  const handleContinueToCheckout = () => {
    setCartStep(CartStep.CHECKOUT)
  }

  const handleFinishPayment = () => {
    setCartStep(CartStep.ORDER)
  }

  const removeItem = (itemId: number) => {
    dispatch(remove(itemId))
  }

  // Função para limpar o carrinho
  const clearCartItems = useCallback(() => {
    dispatch(clearCart())
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

  const totalPrice = items.reduce((total, item) => total + item.preco, 0)

  return (
    <>
      {isOpen && <Overlay onClick={closeCart} />}
      <CartContainer isOpen={isOpen} ref={cartRef}>
        <Sidebar>
          {cartStep === CartStep.CART && (
            <>
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.foto} alt="Imagem do item" />
                    <div>
                      <h3>{item.nome}</h3>
                      <p>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(item.preco)}
                      </p>
                    </div>
                    <button onClick={() => removeItem(item.id)} />
                  </CartItem>
                ))}
              </ul>
              <ValorTotal>
                Valor total
                <TotalPrice>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(totalPrice)}
                </TotalPrice>
              </ValorTotal>
              <button onClick={handleContinueToCheckout}>
                Continuar a compra
              </button>
            </>
          )}
          {cartStep === CartStep.CHECKOUT && (
            <Checkout
              onBackToCart={() => setCartStep(CartStep.CART)}
              onContinueToPayment={() => setCartStep(CartStep.PAYMENT)}
            />
          )}
          {cartStep === CartStep.PAYMENT && (
            <Payment
              onBackToCheckout={() => setCartStep(CartStep.CHECKOUT)}
              onFinishPayment={handleFinishPayment}
            />
          )}
          {cartStep === CartStep.ORDER && (
            <Order
              orderId="12345"
              onClose={() => setCartStep(CartStep.CART)}
              onOrderComplete={clearCartItems}
            />
          )}
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart
