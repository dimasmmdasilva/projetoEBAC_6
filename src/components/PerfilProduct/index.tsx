import GalleryItem from '../Gallery'
import { PerfilButtonCard, PerfilButtonContainer } from '../PerfilButton/styles'
import { Card, Title, Description } from './styles'

type Props = {
  title: string
  description: string
  image: string
  category: string
  infos: string[]
}

export const PerfilProduct = ({ title, description, image }: Props) => (
  <>
    <Card>
      <GalleryItem items={[{ type: 'image', url: image }]} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PerfilButtonContainer>
        <PerfilButtonCard title="Adicionar">
          Adicionar ao carrinho
        </PerfilButtonCard>
      </PerfilButtonContainer>
    </Card>
  </>
)

export default PerfilProduct
