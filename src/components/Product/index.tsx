import ButtonCard from '../Button'
import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import { Card, Title, Description, Infos } from './styles'

type Props = {
  title: string
  category: string
  image: string
  description: string
  infos: string[]
}

export const Product = ({
  title,
  category,
  image,
  description,
  infos
}: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      <Tag>{category}</Tag>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ButtonContainer>
      <ButtonCard type="link" title="Clique aqui para saber mais">
        Saber mais
      </ButtonCard>
    </ButtonContainer>
  </Card>
)

export default Product
