// ProductsList/styles.ts

import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.beige_light};
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  margin-top: 70px;
  margin-bottom: 120px;
  justify-content: center;

  @media (max-width: 968px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: -35px;
  }
`
