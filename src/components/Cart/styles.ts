// Cart/styles.ts

import styled from 'styled-components'
import { colors } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'
import close from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 360px;
  z-index: 1000;
  background-color: ${colors.salmon_light};
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
`

export const Sidebar = styled.aside`
  padding: 40px 16px 0 16px;
  color: ${colors.salmon_light};
  font-family: 'Roboto', sans-serif;

  ul {
    list-style: none;
    padding: 0;
    margin-top: -32px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21.09px;
    text-align: center;

  }

  p {
    margin-bottom: 24px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }

  button {
    border: 2px solid ${colors.beige_light};
    background-color: ${colors.beige_dark};
    color: ${colors.salmon_light};
    font-family: 'Roboto', sans-serif;
    padding: 0px;
    height: 24px;
    width: 344px;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: center;
    margin-left: -10px;

  &:hover {
    background-color: ${colors.salmon_light};
    border: 2px solid ${colors.white};
    color: ${colors.white};
    transition: background-color 0.3s;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 344px;
  height: 100px;
  margin-left: -8px;
  background-color: ${colors.beige_dark};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 10px;
    padding: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 14px;
    margin-top: -28px;
    margin-left: -10px;
  }

  p {
    font-size: 14px;
    margin: 0;
    margin-left: -10px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 4px;
    margin-bottom: 4px;

    &:hover {
      background-image: url(${close});
    }
  }

  &:first-child {
    margin-top: 30px;
  }
`

export const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: -8px;
  margin-bottom: -8px;
  color: ${colors.beige_dark};
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
`

export const TotalPrice = styled.p`
  margin: 0;
`
