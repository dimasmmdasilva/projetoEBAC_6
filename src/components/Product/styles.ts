// Product/styles.ts

import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  position: relative;
  width: 472px;
  height: 398px;
  margin: 0 auto;
`

export const Img = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const CardInfo = styled.div`
  border: 1px solid ${colors.salmon_light};
  border-top: none;
  background-color: ${colors.white};
  position: absolute;
  width: 471px;
  height: 181px;
  top: 217px;
`

export const InfoContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 16px);
`

export const Title = styled.h4`
  color: ${colors.salmon_light};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  margin: 8px 0;
`

export const Grade = styled.h4`
  color: ${colors.salmon_light};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  margin: 0 4px 0 8px;
  margin-left: auto;
`

export const StarImage = styled.img`
  width: 21px;
  height: 21px;
`

export const Description = styled.p`
  color: ${colors.salmon_light};
  font-family: Roboto;
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  margin: 0 8px 8px 8px;
  position: absolute;
  top: calc(16px + 21px + 8px);
  right: 8px;
  text-align: justify;
`

export const Infos = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
`

export const Tag = styled.span`
  font-family: Roboto;
  font-size: 12px;
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: ${colors.salmon_light};
  color: ${colors.white};
  padding: 4px 4px;
  border-radius: 0px;
`
