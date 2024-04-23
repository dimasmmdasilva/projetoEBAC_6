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

interface PaymentProps {
  onBackToCheckout?: () => void
  onFinishPayment?: () => void
}

const Payment: React.FC<PaymentProps> = ({
  onBackToCheckout,
  onFinishPayment
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

  return (
    <PaymentContainer>
      <Heading>Pagamento</Heading>
      <PaymentForm>
        <FormGroup>
          <FormLabel>Nome do cartão</FormLabel>
          <FormInput type="text" />
        </FormGroup>
        <Row>
          <FormGroup style={{ marginRight: '10px' }}>
            <FormLabel>Número do cartão</FormLabel>
            <FormInput type="number" />
          </FormGroup>
          <FormGroup>
            <FormLabel>CVV</FormLabel>
            <FormInput type="number" />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup style={{ marginRight: '10px' }}>
            <FormLabel>Mês de vencimento</FormLabel>
            <FormInput type="text" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Ano de vencimento</FormLabel>
            <FormInput type="text" />
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
