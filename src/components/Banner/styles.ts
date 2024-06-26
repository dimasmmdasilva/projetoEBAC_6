// Banner/styles.ts

import styled from 'styled-components'
import { colors } from '../../styles'

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
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
    opacity: 0.4;
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
  z-index: 2;
  position: absolute;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  text-align: left;
  margin-left: 4px;
  top: 0;
`
export const TitleRestaurant = styled.h2`
  z-index: 2;
  position: absolute;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  text-align: left;
  margin-left: 4px;
  bottom: 0;
`
