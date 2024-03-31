import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Options from '../../models/Options'
import taco from '../../assets/images/taco.jpg'
import japanese from '../../assets/images/japanese.jpg'
import brazilian from '../../assets/images/arroz_feijao.jpg'
import italian from '../../assets/images/italian.jpg'
import mediterranean from '../../assets/images/mediterranean.jpg'
import american from '../../assets/images/hamburger.jpg'
import { PerfilList } from '../../components/PerfilProductsList'
import PerfilHeader from '../../components/PerfilHeader'

const menu: Options[] = [
  {
    id: 1,
    title: 'Labrabada Tacos',
    category: 'Mexican',
    description: 'La mejor comida mexicana agora no Brasil...',
    infos: ['Destaque'],
    image: taco
  },
  {
    id: 2,
    title: 'Tokyo Sushi',
    category: 'Japanese',
    description: 'Direatamente do Japão agora no Brasil...',
    infos: ['Novo'],
    image: japanese
  },
  {
    id: 3,
    title: 'Lá da Roça',
    category: 'Brazilian',
    description: 'Comida da roça é bão demais é do Brasil...',
    infos: ['Tradicional'],
    image: brazilian
  },
  {
    id: 4,
    title: 'MammaMia',
    category: 'Italian',
    description: 'As melhores refeições italianas agora no Brasil...',
    infos: ['Destaque'],
    image: italian
  },
  {
    id: 5,
    title: 'The Best',
    category: 'American',
    description: 'Os melhores hamburgueres chegaram no Brasil...',
    infos: ['Especial'],
    image: american
  },
  {
    id: 6,
    title: 'Pura Vita',
    category: 'Mediterranean',
    description: 'A comida Mediterrânea agora no Brasil...',
    infos: ['Novo'],
    image: mediterranean
  }
]

export const Perfil = () => {
  return (
    <>
      <PerfilHeader />
      <Banner />
      <PerfilList options={menu} />
      <Footer />
    </>
  )
}

export default Perfil
