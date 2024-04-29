// PerfilProduct/index.tsx

import React, { useState } from 'react'
import { Card, Title, Description, Infos } from './styles'
import GalleryItem from '../Gallery'
import PerfilButton from '../PerfilButton'
import Modal from '../Modal'

export type PerfilProductProps = {
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
  avaliacao: number
}

const PerfilProduct: React.FC<PerfilProductProps> = ({
  nome,
  descricao,
  preco,
  foto,
  porcao
}: PerfilProductProps) => {
  const items = [{ type: 'image', url: foto }]
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <Card>
      <GalleryItem items={items as GalleryItem[]} />
      <Title>{nome}</Title>
      <Description>{descricao}</Description>
      <Infos>
        <PerfilButton openModal={openModal}>Mais detalhes</PerfilButton>
      </Infos>
      {modalOpen && (
        <Modal
          closeModal={closeModal}
          price={preco}
          imageUrl={foto}
          title={nome}
          description={descricao}
          porcao={porcao}
        />
      )}
    </Card>
  )
}

export default PerfilProduct
