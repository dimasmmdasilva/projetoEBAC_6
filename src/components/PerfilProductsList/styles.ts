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
  grid-template-columns: repeat(
    3,
    320px
  ); /* Define 3 colunas com largura fixa de 320px */
  gap: 25px;
  justify-content: center;
`
