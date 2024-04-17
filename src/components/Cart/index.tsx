import React, { useRef, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import { remove } from '../../store/reducers/cart'
import { CartContainer, CartItem, Overlay, Sidebar, ValorTotal } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const cartRef = useRef<HTMLDivElement>(null)

  const closeCart = useCallback(() => {
    dispatch(close())
  }, [dispatch])

  const removeItem = (itemId: number) => {
    dispatch(remove(itemId))
  }

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
                <button onClick={() => removeItem(item.id)}></button>
              </CartItem>
            ))}
          </ul>
          <ValorTotal>
            Valor total{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(totalPrice)}
          </ValorTotal>
          <button>Continuar a compra</button>
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Cart
