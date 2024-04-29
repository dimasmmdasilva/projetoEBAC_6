// Cart/index.tsx

import React, { useRef, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, clearCart } from '../../store/reducers/cart'
import Checkout from '../Checkout'
import Payment from '../Payment'
import Order from '../Order'
import { v4 as uuidv4 } from 'uuid' // Importar a função uuid
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
  const [orderId, setOrderId] = useState<string>('')

  const closeCart = useCallback(() => dispatch(close()), [dispatch])

  const changeStep = (newStep: CartStep) => {
    // Verifica se o carrinho está vazio antes de prosseguir para o checkout
    if (newStep === CartStep.CHECKOUT && items.length === 0) {
      alert('O carrinho está vazio')
      return
    }
    setCartStep(newStep)
  }

  const removeItem = useCallback(
    (itemId: number) => {
      dispatch(remove(itemId))
    },
    [dispatch]
  )

  const clearCartItems = useCallback(() => dispatch(clearCart()), [dispatch])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        closeCart()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, closeCart])

  useEffect(() => {
    // Gerar um novo ID de pedido ao abrir o carrinho
    if (isOpen) {
      setOrderId(uuidv4())
    }
  }, [isOpen])

  const totalPrice = items.reduce((total, item) => total + item.preco, 0)

  return (
    <>
      {isOpen && <Overlay onClick={closeCart} />}
      <CartContainer isOpen={isOpen} ref={cartRef}>
        <Sidebar>
          {cartStep === CartStep.CART &&
            items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(item.preco)}
                  </p>
                  <button onClick={() => removeItem(item.id)} />
                </div>
              </CartItem>
            ))}
          {cartStep === CartStep.CART && (
            <>
              <ValorTotal>
                Valor total:{' '}
                <TotalPrice>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(totalPrice)}
                </TotalPrice>
              </ValorTotal>
              <button onClick={() => changeStep(CartStep.CHECKOUT)}>
                Continuar a compra
              </button>
            </>
          )}
          {cartStep === CartStep.CHECKOUT && (
            <Checkout
              onBackToCart={() => changeStep(CartStep.CART)}
              onContinueToPayment={() => changeStep(CartStep.PAYMENT)}
            />
          )}
          {cartStep === CartStep.PAYMENT && (
            <Payment
              onBackToCheckout={() => changeStep(CartStep.CHECKOUT)}
              onFinishPayment={() => changeStep(CartStep.ORDER)}
              items={items}
            />
          )}
          {cartStep === CartStep.ORDER && (
            <Order
              orderId={orderId} // Passa o orderId para o componente Order
              onClose={() => changeStep(CartStep.CART)}
              onOrderComplete={clearCartItems}
            />
          )}
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart
