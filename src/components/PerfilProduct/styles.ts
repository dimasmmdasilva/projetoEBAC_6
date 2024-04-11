// PerfilProduct/styles.ts
import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.salmon_light};
  border-radius: 0px;
  padding: 8px;
  width: 320px;
  height: auto;
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
  margin-top: 12px;
  margin-bottom: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  text-align: left;
`

export const Description = styled.p`
  color: ${colors.beige_dark};
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
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
  height: auto;
  border-radius: 8px;
`
