// PerfilProductsList/styles.ts

import styled from 'styled-components'

export const PerfilContainer = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 60px;
`

export const List = styled.ul`
  display: grid;
  margin-left: -40px;
  grid-template-columns: repeat(3, 320px);
  gap: 25px;
  justify-content: center;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 320px);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 320px);
  }
`
