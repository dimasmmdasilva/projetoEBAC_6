// Order/index.tsx

import React from 'react'
import { useSelector } from 'react-redux'
import { useSubmitOrderMutation } from '../../services/api'
import { RootReducer } from '../../store' // Ajuste o caminho conforme necessário

import {
  OrderContainer,
  OrderContent,
  OrderText,
  OrderButton,
  OrderTitle
} from './styles'

interface OrderProps {
  orderId: string
  onClose: () => void
  onOrderComplete: () => void
}

const Order: React.FC<OrderProps> = ({ orderId, onClose, onOrderComplete }) => {
  const [submitOrder, { isLoading }] = useSubmitOrderMutation()
  const delivery = useSelector((state: RootReducer) => state.delivery)
  const payment = useSelector((state: RootReducer) => state.payment)
  const items = useSelector((state: RootReducer) => state.cart.items).map(
    (item) => ({ id: item.id, price: item.preco })
  )

  const handleCompleteOrder = async () => {
    const formData = {
      products: items,
      delivery: delivery,
      payment: {
        card: payment // Ajustando para incluir a propriedade 'card' esperada
      }
    }

    try {
      await submitOrder(formData).unwrap()
      onOrderComplete()
      onClose()
    } catch (error) {
      console.error('Erro ao enviar pedido:', error)
    }
  }

  return (
    <OrderContainer>
      <OrderContent>
        <OrderTitle>Pedido realizado - {orderId}</OrderTitle>
        <br />
        <OrderText>
          <br />
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </OrderText>
        <OrderButton onClick={handleCompleteOrder} disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Concluir'}
        </OrderButton>
      </OrderContent>
    </OrderContainer>
  )
}

export default Order
