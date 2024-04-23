// Order/index.tsx

import React from 'react'
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
  onOrderComplete: () => void // Adicionado
}

const Order: React.FC<OrderProps> = ({ orderId, onClose, onOrderComplete }) => {
  // Modificado
  return (
    <OrderContainer>
      <OrderContent>
        <OrderTitle>Pedido realizado - {orderId}</OrderTitle>
        <OrderText>
          <br />
          <br />
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
          <br />
          <br />
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          <br />
          <br />
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </OrderText>
        <OrderButton
          onClick={() => {
            onOrderComplete() // Limpa o carrinho
            onClose() // Fecha o Cart
          }}
        >
          Concluir
        </OrderButton>
      </OrderContent>
    </OrderContainer>
  )
}

export default Order
