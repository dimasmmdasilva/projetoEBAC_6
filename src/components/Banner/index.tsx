// Banner.tsx
import React from 'react'
import { BackgroundImage, TitleImage, TitleRestaurant } from './styles'

interface BannerProps {
  capa: string
  tipo: string
  titulo: string
}

const Banner: React.FC<BannerProps> = ({ capa, tipo, titulo }) => (
  <BackgroundImage style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <TitleImage>{tipo}</TitleImage>
      <TitleRestaurant>{titulo}</TitleRestaurant>
    </div>
  </BackgroundImage>
)

export default Banner
