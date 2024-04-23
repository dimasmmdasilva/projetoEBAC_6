// Modal/index.tsx
import React, { useRef, useEffect } from 'react'
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
import closeImg from '../../assets/images/fechar.png'

type Props = {
  price: number
  imageUrl: string
  title: string
  description: string
  porcao: string
  closeModal: () => void
}

const Modal: React.FC<Props> = ({
  price,
  imageUrl,
  title,
  description,
  porcao,
  closeModal
}) => {
  const dispatch = useDispatch()
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [closeModal, modalRef])

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
    closeModal()
    dispatch(openCart())
  }

  return (
    <Overlay>
      <ModalContent ref={modalRef}>
        <CloseButton onClick={closeModal}>
          <img src={closeImg} alt="Fechar" />
        </CloseButton>
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
