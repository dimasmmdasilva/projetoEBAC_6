// Banner/index.tsx

import React from 'react'
import { BackgroundImage, TitleImage, TitleRestaurant } from './styles'
import { Container } from '../../styles'

interface BannerProps {
  capa: string
  tipo: string
  titulo: string
}

const Banner: React.FC<BannerProps> = ({ capa, tipo, titulo }) => (
  <BackgroundImage style={{ backgroundImage: `url(${capa})` }}>
    <Container>
      <TitleImage>{tipo}</TitleImage>
      <TitleRestaurant>{titulo}</TitleRestaurant>
    </Container>
  </BackgroundImage>
)

export default Banner
