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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  justify-content: center;
`
