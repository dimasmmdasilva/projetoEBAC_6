// Checkout/index.tsx

import React from 'react'
import {
  CheckoutContainer,
  CheckoutForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  Row,
  Heading
} from './styles'

interface CheckoutProps {
  onBackToCart?: () => void
  onContinueToPayment?: () => void
}

const Checkout: React.FC<CheckoutProps> = ({
  onBackToCart,
  onContinueToPayment
}) => {
  const handleContinueToPayment = () => {
    if (onContinueToPayment) {
      onContinueToPayment()
    }
  }

  return (
    <CheckoutContainer>
      <Heading>Entrega</Heading>
      <CheckoutForm>
        <FormGroup>
          <FormLabel>Quem irá receber</FormLabel>
          <FormInput type="text" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Endereço</FormLabel>
          <FormInput type="text" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Cidade</FormLabel>
          <FormInput type="text" />
        </FormGroup>
        <Row>
          <FormGroup style={{ marginRight: '54px' }}>
            <FormLabel>CEP</FormLabel>
            <FormInput type="text" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Número</FormLabel>
            <FormInput type="text" />
          </FormGroup>
        </Row>
        <FormGroup>
          <FormLabel>Complemento (opcional)</FormLabel>
          <FormInput type="text" />
        </FormGroup>
        <div>
          <FormButton type="submit" onClick={handleContinueToPayment}>
            Continuar com o pagamento
          </FormButton>
        </div>
        <div>
          <FormButton type="button" onClick={onBackToCart}>
            Voltar para o carrinho
          </FormButton>
        </div>
      </CheckoutForm>
    </CheckoutContainer>
  )
}

export default Checkout
