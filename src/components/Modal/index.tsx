// Modal/index.tsx
import React from 'react'
import {
  Overlay,
  ModalContent,
  CloseButton,
  ModalImage,
  ProductInfo,
  AddToCartButton
} from './styles'
import close from '../../assets/images/fechar.png'
import { Container } from '../../styles'

type Props = {
  closeModal: () => void
  price: number
  imageUrl: string
  title: string
  description: string
  porcao: string
}

const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal: React.FC<Props> = ({
  closeModal,
  price,
  imageUrl,
  title,
  description,
  porcao
}) => {
  return (
    <Overlay onClick={closeModal}>
      <Container>
        <ModalContent>
          <CloseButton onClick={closeModal}>
            <img src={close} alt="Fechar" className="close" />
          </CloseButton>
          <ModalImage>
            <img src={imageUrl} alt="Imagem" />
          </ModalImage>
          <ProductInfo>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Serve: {porcao}</p>
            <AddToCartButton>
              Adicionar ao carrinho - {formataPreco(price)}
            </AddToCartButton>
          </ProductInfo>
        </ModalContent>
      </Container>
    </Overlay>
  )
}

export default Modal
