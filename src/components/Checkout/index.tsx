// Checkout/index.tsx

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { updateDeliveryInfo } from '../../store/reducers/delivery'

import {
  CheckoutContainer,
  CheckoutForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMessage,
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
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      recipient: '',
      address: '',
      city: '',
      zip: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      recipient: Yup.string().required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zip: Yup.string().required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório'),
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      dispatch(
        updateDeliveryInfo({
          receiver: values.recipient,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zip,
            number: parseInt(values.number, 10),
            complement: values.complement
          }
        })
      )
      if (onContinueToPayment) {
        onContinueToPayment()
      }
    }
  })

  return (
    <CheckoutContainer>
      <Heading>Entrega</Heading>
      <CheckoutForm onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FormLabel>Quem irá receber</FormLabel>
          <FormInput type="text" {...formik.getFieldProps('recipient')} />
          {formik.touched.recipient && formik.errors.recipient ? (
            <ErrorMessage>{formik.errors.recipient}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <FormLabel>Endereço</FormLabel>
          <FormInput type="text" {...formik.getFieldProps('address')} />
          {formik.touched.address && formik.errors.address ? (
            <ErrorMessage>{formik.errors.address}</ErrorMessage>
          ) : null}
        </FormGroup>
        <FormGroup>
          <FormLabel>Cidade</FormLabel>
          <FormInput type="text" {...formik.getFieldProps('city')} />
          {formik.touched.city && formik.errors.city ? (
            <ErrorMessage>{formik.errors.city}</ErrorMessage>
          ) : null}
        </FormGroup>
        <Row>
          <FormGroup style={{ marginRight: '54px' }}>
            <FormLabel>CEP</FormLabel>
            <FormInput type="text" {...formik.getFieldProps('zip')} />
            {formik.touched.zip && formik.errors.zip ? (
              <ErrorMessage>{formik.errors.zip}</ErrorMessage>
            ) : null}
          </FormGroup>
          <FormGroup>
            <FormLabel>Número</FormLabel>
            <FormInput type="text" {...formik.getFieldProps('number')} />
            {formik.touched.number && formik.errors.number ? (
              <ErrorMessage>{formik.errors.number}</ErrorMessage>
            ) : null}
          </FormGroup>
        </Row>
        <FormGroup>
          <FormLabel>Complemento (opcional)</FormLabel>
          <FormInput type="text" {...formik.getFieldProps('complement')} />
        </FormGroup>
        <div>
          <FormButton type="submit">Continuar com o pagamento</FormButton>
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
