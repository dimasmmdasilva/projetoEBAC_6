// Button/styles.ts

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 8px;
`

export const ButtonCard = styled.button`
  width: 82px;
  height: 24px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.salmon_light};
  color: ${colors.beige_dark};
  background-color: ${colors.salmon_light};
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  width: 70px;
  height: 16px;
  padding: 4px;

  &:hover {
    background-color: ${colors.white};
    border: 2px solid ${colors.salmon_soft};
    color: ${colors.salmon_light};
    transition: background-color 0.3s;
  }
`
