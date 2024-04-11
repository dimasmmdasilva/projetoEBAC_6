// PerfilProduct.tsx
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
  margin-top: -8px;
  margin-bottom: 0px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 900;
  line-height: 18.75px;
  text-align: left;
`

export const Description = styled.p`
  color: ${colors.beige_dark};
  margin-top: -12px;
  margin-bottom: 4px;
  font-family: 'Roboto', sans-serif;
  width: 300px;
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`

export const Infos = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  background-color: ${colors.salmon_light};
  color: ${colors.white};
  font-family: Roboto;
  font-size: 12px;
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 4px;
  border-radius: 4px;
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  border-radius: 0px;
  object-fit: cover;
`
