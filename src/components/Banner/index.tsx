import { BackgroundImage, TitleImage, TitleRestaurant } from './styles'
import italian from '../../assets/images/italian_banner.jpg'

const Banner = () => (
  <BackgroundImage style={{ backgroundImage: `url(${italian})` }}>
    <div className="container">
      <TitleImage>Categoria</TitleImage>
      <TitleRestaurant>Restaurante</TitleRestaurant>
    </div>
  </BackgroundImage>
)

export default Banner
