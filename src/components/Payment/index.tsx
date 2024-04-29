// Payment/index.tsx

import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { updatePaymentInfo } from '../../store/reducers/payment'
import { MenuItem } from '../../pages/Home'
import {
  PaymentContainer,
  PaymentForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMessage,
  Row,
  Heading
} from './styles'

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
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .required('Campo obrigatório')
        .matches(/^[A-Z\s]*$/, 'Apenas letras maiúsculas são permitidas'),
      cardNumber: Yup.string()
        .required('Campo obrigatório')
        .matches(/^\d{16}$/, 'Deve conter exatamente 16 números'),
      cvv: Yup.string()
        .required('Campo obrigatório')
        .matches(/^\d{3}$/, 'Deve conter exatamente 3 números'),
      expiryMonth: Yup.string()
        .required('Campo obrigatório')
        .matches(/^(0?[1-9]|1[0-2])$/, 'Deve ser um número de 1 a 12'),
      expiryYear: Yup.string()
        .required('Campo obrigatório')
        .matches(/^(202[4-9]|20[3-9]\d|\d{5,})$/, 'Deve ser a partir de 2024')
    }),
    onSubmit: (values) => {
      dispatch(
        updatePaymentInfo({
          name: values.cardName,
          number: values.cardNumber,
          code: parseInt(values.cvv, 10),
          expires: {
            month: parseInt(values.expiryMonth, 10),
            year: parseInt(values.expiryYear, 10)
          }
        })
      )
      if (onFinishPayment) {
        onFinishPayment()
      }
    }
  })

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
      <PaymentForm onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FormLabel>Nome do cartão</FormLabel>
          <FormInput type="text" {...formik.getFieldProps('cardName')} />
          {formik.touched.cardName && formik.errors.cardName ? (
            <ErrorMessage>{formik.errors.cardName}</ErrorMessage>
          ) : null}
        </FormGroup>
        <Row>
          <FormGroup style={{ marginRight: '45px', width: '70%' }}>
            <FormLabel>Número do cartão</FormLabel>
            <FormInput type="text" {...formik.getFieldProps('cardNumber')} />
            {formik.touched.cardNumber && formik.errors.cardNumber ? (
              <ErrorMessage>{formik.errors.cardNumber}</ErrorMessage>
            ) : null}
          </FormGroup>
          <FormGroup style={{ width: '30%' }}>
            <FormLabel>CVV</FormLabel>
            <FormInput type="text" {...formik.getFieldProps('cvv')} />
            {formik.touched.cvv && formik.errors.cvv ? (
              <ErrorMessage>{formik.errors.cvv}</ErrorMessage>
            ) : null}
          </FormGroup>
        </Row>
        <Row>
          <FormGroup style={{ marginRight: '45px' }}>
            <FormLabel>Mês de vencimento</FormLabel>
            <FormInput type="text" {...formik.getFieldProps('expiryMonth')} />
            {formik.touched.expiryMonth && formik.errors.expiryMonth ? (
              <ErrorMessage>{formik.errors.expiryMonth}</ErrorMessage>
            ) : null}
          </FormGroup>
          <FormGroup>
            <FormLabel>Ano de vencimento</FormLabel>
            <FormInput type="text" {...formik.getFieldProps('expiryYear')} />
            {formik.touched.expiryYear && formik.errors.expiryYear ? (
              <ErrorMessage>{formik.errors.expiryYear}</ErrorMessage>
            ) : null}
          </FormGroup>
        </Row>
        <div>
          <FormButton type="submit">Finalizar o pagamento</FormButton>
        </div>
        <div>
          <FormButton type="button" onClick={onBackToCheckout}>
            Voltar para a edição do endereço
          </FormButton>
        </div>
      </PaymentForm>
    </PaymentContainer>
  )
}

export default Payment
