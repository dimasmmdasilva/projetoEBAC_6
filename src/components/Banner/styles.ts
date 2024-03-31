import styled from 'styled-components'
import { colors } from '../../styles'

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-left: 240px;
  }
`

export const TitleImage = styled.h3`
  font-size: 24px;
  font-weight: lighter;
  font-family: 'DM Sans', sans-serif;
`
export const TitleRestaurant = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: 'DM Sans', sans-serif;
`
