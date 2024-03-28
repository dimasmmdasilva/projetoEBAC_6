import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 48px;
  margin-right: 24px;
  margin-left: 24px;
  position: relative;
`

export const Title = styled.h4`
  font-weight: bold;
  font-family: Arial;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 12px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 12px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
