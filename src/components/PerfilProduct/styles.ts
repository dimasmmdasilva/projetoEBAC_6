// PerfilProduct/styles.ts

import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.salmon_light};
  border-radius: 0px;
  padding: 8px;
  width: 320px;
  height: 338px;
  margin-bottom: 48px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h4`
  color: ${colors.beige_dark};
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 900;
  line-height: 14px;
  text-align: left;
  margin: 0;
`

export const Description = styled.p`
  color: ${colors.beige_dark};
  font-family: 'Roboto', sans-serif;
  width: 310px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  margin: 0;
`

export const Infos = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  border-radius: 0px;
  object-fit: cover;
`
