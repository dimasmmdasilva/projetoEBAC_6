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
  padding: 0;
  background-color: ${colors.salmon_light};
  margin-left: 7px;
  border-radius: 0px;
  position: relative;
  z-index: 1000;
  display: flex;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 16px;
    height: auto;
  }
`

export const ModalImage = styled.div`
  padding: 32px;

  img {
    width: 280px;
    height: 280px;
    border-radius: 0px;
  }
`

export const ProductInfo = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  color: ${colors.white};

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }
`

export const AddToCartButton = styled.button`
  background-color: ${colors.beige_dark};
  color: ${colors.salmon_light};
  border: 2px solid ${colors.beige_dark};
  font-family: 'Roboto', sans-serif;
  border-radius: 0px;
  padding: 4px;
  height: 24px;
  width: 218px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.salmon_light};
    border: 2px solid ${colors.white};
    color: ${colors.white};
  }
`
