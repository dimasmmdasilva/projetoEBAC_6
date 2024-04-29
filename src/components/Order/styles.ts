// Order/styles.ts

import styled from 'styled-components'
import { colors } from '../../styles'

export const OrderContainer = styled.div`
  background-color: salmon_light;
`

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: -16px;
`

export const OrderTitle = styled.h2`
  font-family: Roboto;
  color: ${colors.beige_dark};
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  margin-top: 5px;
  margin-bottom: -40px;
  margin-left: -8px;
`

export const OrderText = styled.p`
  font-family: Roboto;
  color: ${colors.beige_dark};
  text-align: center;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  margin-left: -8px;
`

export const OrderButton = styled.button`
  background-color: ${colors.beige_dark};
  color: ${colors.white};
  border: none;
  padding: 10px 20px;
  border-radius: 0px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-sizing: border-box;

  &:hover {
    background-color: ${colors.beige_light};
  }
`
