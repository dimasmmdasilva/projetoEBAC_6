import ProductsList from '../../components/ProductsList'
import Options from '../../models/Options'
import taco from '../../assets/images/taco.jpg'
import japanese from '../../assets/images/japanese.jpg'
import brazilian from '../../assets/images/arroz_feijao.jpg'
import italian from '../../assets/images/italian.jpg'
import mediterranean from '../../assets/images/mediterranean.jpg'
import american from '../../assets/images/hamburger.jpg'

const restaurants: Options[] = [
  {
    id: 1,
    title: 'Mexicana Labraba',
    category: 'Mexican',
    description: 'La melhor comida mexicana agora no Brasil...',
    infos: ['Destaque'],
    image: taco
  },
  {
    id: 2,
    title: 'Tokyo Food',
    category: 'Japanese',
    description: 'Direatamente do Japão agora no Brasil...',
    infos: [],
    image: japanese
  },
  {
    id: 3,
    title: 'Da Roça',
    category: 'Brazilian',
    description: 'A melhor comida da roça é do Brasil...',
    infos: [],
    image: brazilian
  },
  {
    id: 4,
    title: 'Milano MammaMia',
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
    infos: [],
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

const Home = () => (
  <>
    <ProductsList options={restaurants} />
  </>
)

export default Home
