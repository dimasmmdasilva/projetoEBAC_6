// Product.tsx
import React from 'react'
import { CardContainer, Grade, InfoContainer, StarImage } from './styles'
import { ButtonContainer, ButtonLink } from '../Button/styles'
import { Description, Infos, CardInfo, Img, Title, Tag } from './styles'
import star from '../../assets/images/star.png'

interface ProductProps {
  id: string
  nome: string
  descricao: string
  foto: string
  avaliacao: number
  tipo: string
  destacado: boolean
}

const Product: React.FC<ProductProps> = ({
  id,
  nome,
  descricao,
  foto,
  avaliacao,
  tipo,
  destacado
}) => (
  <CardContainer>
    <Img src={foto} />
    <Infos>
      <Tag>{tipo}</Tag>
      {destacado && <Tag>destaque</Tag>}
    </Infos>
    <CardInfo>
      <InfoContainer>
        <Title>{nome}</Title>
        <Grade>{avaliacao}</Grade>
        <StarImage src={star} alt="Star" />
      </InfoContainer>
      <Description>{descricao}</Description>
      <ButtonContainer>
        <ButtonLink
          type="link"
          to={`/perfil/${id}`}
          title="Clique para saber mais"
        >
          Saiba mais
        </ButtonLink>
      </ButtonContainer>
    </CardInfo>
  </CardContainer>
)

export default Product
