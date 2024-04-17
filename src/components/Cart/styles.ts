// Cart/styles.ts
import styled from 'styled-components'
import { colors } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 360px;
  background-color: ${colors.salmon_light};
  z-index: 999;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
`

export const Sidebar = styled.aside`
  padding: 40px 16px 0 16px;

  ul {
    list-style: none;
    padding: 0;
  }

  p {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 24px;

    span {
      display: block;
      font-size: 12px;
    }
  }

  button {
    background-color: transparent;
    color: ${colors.white};
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 344px;
  height: 100px;
  background-color: ${colors.beige_dark};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 10px;
  }

  h3 {
    font-weight: bold;
    font-size: 14px;
  }

  p {
    font-size: 14px;
    margin: 0;
  }

  button {
    background-image: url(${lixeira});
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
`
