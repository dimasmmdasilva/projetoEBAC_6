import styled from 'styled-components'
import { colors } from '../../styles'

export const PerfilButtonContainer = styled.div`
  position: absolute;
  bottom: 8px;
`

export const PerfilButtonCard = styled.button`
  border: 2px solid ${colors.beige_light};
  color: ${colors.salmon_light};
  background-color: ${colors.beige_dark};
  font-family: 'Roboto', sans-serif;
  padding: 4px;
  height: 24px;
  width: 316px;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;

  &:hover {
    background-color: ${colors.salmon_light};
    border: 2px solid ${colors.white};
    color: ${colors.white};
`
