import React from 'react'
import { useDispatch } from 'react-redux'
import { add, open as openCart } from '../../store/reducers/cart'
import {
  Overlay,
  ModalContent,
  CloseButton,
  ModalImage,
  ProductInfo,
  AddToCartButton
} from './styles'

type Props = {
  price: number
  imageUrl: string
  title: string
  description: string
  porcao: string
  closeModal: () => void // Adicione a função closeModal
}

const Modal: React.FC<Props> = ({
  price,
  imageUrl,
  title,
  description,
  porcao,
  closeModal // Receba a função closeModal como prop
}) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(
      add({
        nome: title,
        descricao: description,
        preco: price,
        foto: imageUrl,
        porcao: porcao,
        id: Date.now()
      })
    )
    closeModal() // Feche o modal após adicionar o item
    dispatch(openCart()) // Abra o carrinho após adicionar o item
  }

  return (
    <Overlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <ModalImage>
          <img src={imageUrl} alt="Imagem" />
        </ModalImage>
        <ProductInfo>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Serve: {porcao}</p>
          <AddToCartButton onClick={addToCart}>
            Adicionar ao carrinho -{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(price)}
          </AddToCartButton>
        </ProductInfo>
      </ModalContent>
    </Overlay>
  )
}

export default Modal
