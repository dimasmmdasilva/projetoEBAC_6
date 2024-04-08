import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.beige_light};
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  margin-top: 50px;
`
