// Modal/styles.ts
import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const ModalContent = styled.div`
  width: 1026px;
  height: 344px;
  background-color: ${colors.salmon_light};
  padding: 20px;
  margin-left: 7px;
  border-radius: 0px;
  position: relative;
  z-index: 1000;
  display: flex;
  align-items: center;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 15px;
    height: auto;
  }
`

export const ModalImage = styled.div`
  width: 50%;
  height: 100%;
  img {
    width: 85%;
    height: 340px;
    border-radius: 0px;
  }
`

export const ProductInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Roboto', sans-serif;
  color: ${colors.white};
  height: 100%;
  margin-left: -50px;
`

export const AddToCartButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.salmon_light};
  border: 2px solid ${colors.salmon_light};
  font-family: 'Roboto', sans-serif;
  border-radius: 0px;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
`
