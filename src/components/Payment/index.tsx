// Payment/index.tsx

import React from 'react'
import {
  PaymentContainer,
  PaymentForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  Row,
  Heading
} from './styles'
import { MenuItem } from '../../pages/Home'

interface PaymentProps {
  onBackToCheckout?: () => void
  onFinishPayment?: () => void
  items: MenuItem[]
}

const Payment: React.FC<PaymentProps> = ({
  onBackToCheckout,
  onFinishPayment,
  items
}) => {
  const handleBackToCheckout = () => {
    if (onBackToCheckout) {
      onBackToCheckout()
    }
  }

  const handleFinishPayment = () => {
    if (onFinishPayment) {
      onFinishPayment()
    }
  }

  const totalPrice = items.reduce((total, item) => total + item.preco, 0)

  return (
    <PaymentContainer>
      <Heading>
        Pagamento - Valor total{' '}
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(totalPrice)}
      </Heading>
      <PaymentForm>
        <FormGroup style={{ marginBottom: '10px' }}>
          <FormLabel>Nome do cartão</FormLabel>
          <FormInput type="text" />
        </FormGroup>
        <Row>
          <FormGroup style={{ marginRight: '40px' }}>
            <FormLabel>Número do cartão</FormLabel>
            <FormInput type="number" style={{ width: '208px' }} />
          </FormGroup>
          <FormGroup>
            <FormLabel>CVV</FormLabel>
            <FormInput type="number" style={{ width: '77px' }} />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup style={{ marginRight: '45px' }}>
            <FormLabel>Mês de vencimento</FormLabel>
            <FormInput type="text" style={{ width: '140px' }} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Ano de vencimento</FormLabel>
            <FormInput type="text" style={{ width: '140px' }} />
          </FormGroup>
        </Row>
        <div>
          <FormButton type="submit" onClick={handleFinishPayment}>
            Finalizar o pagamento
          </FormButton>
        </div>
        <div>
          <FormButton type="button" onClick={handleBackToCheckout}>
            Voltar para a edição do endereço
          </FormButton>
        </div>
      </PaymentForm>
    </PaymentContainer>
  )
}

export default Payment
