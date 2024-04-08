import styled from 'styled-components'

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`

export const ImageMenu = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 167px;
  border-radius: 4px;
  margin-bottom: 8px;

  &:hover ${Action} {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ImageCard = styled.div``

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .close {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
  }
`

export const ZoomEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`

export const ZoomImage = styled.img`
  width: 50px;
  height: 50px;
  transition: opacity 0.3s ease;

  ${ZoomEffect}:hover & {
    opacity: 1;
  }
`
