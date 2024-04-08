import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.salmon_light};
  border-radius: 8px;
  padding: 8px;
  width: 320px;
  height: 338px;
  margin-bottom: 48px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const Title = styled.h4`
  color: ${colors.beige_light};
  font-weight: bold;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 4px;
  font-family: 'Roboto', sans-serif;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  text-align: left;
`

export const Description = styled.p`
  color: ${colors.beige_light};
  display: block;
  margin-top: 8px;
  margin-left: 4px;
  font-family: 'Roboto', sans-serif;

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`
