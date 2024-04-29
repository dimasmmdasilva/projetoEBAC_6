// Payment/styles.ts

import styled from 'styled-components'
import { colors } from '../../styles'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  padding: 0 0px;
  color: ${colors.beige_dark};
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-top: -15px;
`

export const Heading = styled.h3`
  align-self: flex-start;
  font-size: 16px;
  margin-left: -8px;
`

export const PaymentForm = styled.form`
  width: 324px;
  height: 32px;
  border: none;
`

export const FormGroup = styled.div`
  margin-bottom: 0px;
  margin-left: -8px;
`

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 6px;
  font-size: 16px;
  border: none;
  border-radius: 0px;
  margin-bottom: 8px;
  background-color: ${colors.beige_dark};
`

export const FormButton = styled.button`
  width: 324px;
  height: 32px;
  padding: 10px;
  font-size: 16px;
  background-color: ${colors.beige_dark};
  color: ${colors.white};
  border: none;
  border-radius: 0px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: ${colors.salmon_light};
    border: 2px solid ${colors.white};
    color: ${colors.white};
    transition: background-color 0.3s;
  }
`

export const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`

export const ErrorMessage = styled.div`
  font-size: 10px;
  text-align: right;
  color: ${colors.beige_dark};
`

export default {
  PaymentContainer,
  PaymentForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  Row,
  ErrorMessage
}
