import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  border: 3px solid ${colors.salmon_soft};
  background-color: ${colors.salmon_soft};
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 48px;
  max-width: 400px;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  position: relative;
`

export const Title = styled.h4`
  font-weight: bold;
  font-family: Arial;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 12px;
  font-family: 'Quicksand', sans-serif;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-left: 12px;
  font-family: 'Quicksand', sans-serif;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
