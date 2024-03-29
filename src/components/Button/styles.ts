import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const ButtonContainer = styled.div`
  margin-left: 12px;
  margin-top: 24px;
  margin-bottom: 12px;
`

export const ButtonCard = styled.button`
  width: 82px;
  height: 24px;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.salmon_light};
  color: ${colors.white};
  background-color: ${colors.salmon_light};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 16px;
  min-width: 100px;
  height: auto;
  text-decoration: none;
`
