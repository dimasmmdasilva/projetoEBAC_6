// PerfilProduct.tsx
import React from 'react'
import { Card, Title, Description, Infos, Tag, Image } from './styles'

type PerfilProductProps = {
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
  porcao,
  foto
}: PerfilProductProps) => (
  <Card>
    <Image src={foto} alt={nome} />
    <Title>{nome}</Title>
    <Description>{descricao}</Description>
    <Infos>
      <Tag>serve {porcao}</Tag>
    </Infos>
  </Card>
)

export default PerfilProduct
