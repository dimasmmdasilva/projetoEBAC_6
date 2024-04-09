import { BackgroundImage, TitleImage, TitleRestaurant } from './styles'
import italian from '../../assets/images/italian_banner.jpg'

const Banner = () => (
  <BackgroundImage style={{ backgroundImage: `url(${italian})` }}>
    <div className="container">
      <TitleImage>Italiana</TitleImage>
      <TitleRestaurant>La Dolce Vita Trattoria</TitleRestaurant>
    </div>
  </BackgroundImage>
)

export default Banner
