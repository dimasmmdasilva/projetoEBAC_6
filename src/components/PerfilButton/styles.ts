import styled from 'styled-components'
import { colors } from '../../styles'

export const PerfilButtonContainer = styled.div`
  margin-left: 12px;
  margin-top: 24px;
  margin-bottom: 12px;
`

export const PerfilButtonCard = styled.button`
  border: 2px solid ${colors.beige_light};
  color: ${colors.salmon_light};
  background-color: ${colors.beige_light};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 16px;
  min-width: 100px;
  height: auto;
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  cursor: pointer;

  &:hover {
    background-color: ${colors.salmon_light};
    border: 2px solid ${colors.white};
    color: ${colors.white};
`
