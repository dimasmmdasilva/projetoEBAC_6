// PerfilProduct.tsx
import React from 'react'
import { Card, Title, Description, Infos, Image } from './styles'

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
  foto
}: PerfilProductProps) => (
  <Card>
    <Image src={foto} alt={nome} />
    <Title>{nome}</Title>
    <Description>{descricao}</Description>
    <Infos></Infos>
  </Card>
)

export default PerfilProduct
