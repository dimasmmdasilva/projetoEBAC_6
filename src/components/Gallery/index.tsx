// Gallery/index.tsx

import React, { useState } from 'react'
import {
  Action,
  ImageCard,
  ImageMenu,
  ImgModal,
  Modal,
  ModalContent,
  ZoomEffect,
  ZoomImage
} from './styles'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png' // Importando a imagem de fechar

interface GalleryItem {
  type: 'image'
  url: string
}

type Props = {
  items: GalleryItem[]
}

const GalleryItem: React.FC<Props> = ({ items }) => {
  const [modal, setModal] = useState<{ isVisible: boolean; url: string }>({
    isVisible: false,
    url: ''
  })

  const openModal = (url: string) => {
    setModal({ isVisible: true, url })
  }

  const closeModal = () => {
    setModal({ isVisible: false, url: '' })
  }

  return (
    <>
      <ImageMenu>
        {items.map((media, index) => (
          <ImageCard key={index} onClick={() => openModal(media.url)}>
            <img src={media.url} alt={`Imagem ${index}`} />{' '}
            <Action>
              <ZoomEffect>
                <ZoomImage src={zoom} alt="Clique para ampliar" />
              </ZoomEffect>
            </Action>
          </ImageCard>
        ))}
      </ImageMenu>
      {modal.isVisible && (
        <Modal>
          <div className="overlay" onClick={closeModal}></div>
          <ModalContent>
            <header>
              <img
                src={close}
                alt="Fechar"
                className="close"
                onClick={closeModal}
              />
            </header>
            <ImgModal src={modal.url} />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default GalleryItem
