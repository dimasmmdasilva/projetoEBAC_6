import ButtonCard from '../Button'
import { ButtonContainer } from '../Button/styles'
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
    <ButtonContainer>
      <ButtonCard type="link" title="Clique aqui para saber mais">
        Saber mais
      </ButtonCard>
    </ButtonContainer>
  </Card>
)

export default PerfilProduct
