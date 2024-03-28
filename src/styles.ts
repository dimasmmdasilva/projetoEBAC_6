import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  beige_dark: '#FFEBD9',
  beige_light: '#FFF8F2',
  salmon_light: '#E66767',
  white: '#eee'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0
    padding: 0
    box-sizing: border-box
  }

  body {
    background-color: ${colors.beige_light}
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
