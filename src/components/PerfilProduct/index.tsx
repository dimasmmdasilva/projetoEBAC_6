import { PerfilButtonCard, PerfilButtonContainer } from '../PerfilButton/styles'
import { Card, Title, Description } from './styles'

type Props = {
  title: string
  category: string
  image: string
  description: string
  infos: string[]
}

export const PerfilProduct = ({ title, image, description }: Props) => (
  <Card>
    <img src={image} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <PerfilButtonContainer>
      <PerfilButtonCard title="Comprar">Adicionar ao carrinho</PerfilButtonCard>
    </PerfilButtonContainer>
  </Card>
)

export default PerfilProduct
