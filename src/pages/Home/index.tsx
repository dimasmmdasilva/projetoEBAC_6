import ProductsList from '../../components/ProductsList'
import Options from '../../models/Options'
import taco from '../../assets/images/taco.jpg'
import japanese from '../../assets/images/japanese.jpg'
import brazilian from '../../assets/images/arroz_feijao.jpg'
import italian from '../../assets/images/italian.jpg'
import mediterranean from '../../assets/images/mediterranean.jpg'
import american from '../../assets/images/hamburger.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const restaurants: Options[] = [
  {
    id: 1,
    title: 'Labrabada Tacos',
    category: 'Mexican',
    description:
      'Desfrute dos sabores autênticos do México com os nossos tacos frescos, burritos suculentos e guacamole caseiro.',
    infos: ['Destaque'],
    image: taco,
    grade: '4.5'
  },
  {
    id: 2,
    title: 'Tokyo Sushi',
    category: 'Japanese',
    description:
      'Experimente a autêntica culinária japonesa com os nossos sushis, sashimis e pratos quentes tradicionais.',
    infos: ['Novo'],
    image: japanese,
    grade: '4.6'
  },
  {
    id: 3,
    title: 'Lá da Roça',
    category: 'Brazilian',
    description:
      'Saboreie os pratos típicos da culinária brasileira em um ambiente acolhedor e familiar. De feijão tropeiro a moqueca de peixe, temos algo para todos os gostos!',
    infos: ['Tradicional'],
    image: brazilian,
    grade: '4.8'
  },
  {
    id: 4,
    title: 'MammaMia',
    category: 'Italian',
    description:
      'Delicie-se com os sabores autênticos da Itália em nosso restaurante. Desde pizzas crocantes até massas frescas e risotos cremosos, cada prato é preparado com ingredientes de alta qualidade e paixão!',
    infos: ['Destaque'],
    image: italian,
    grade: '4.7'
  },
  {
    id: 5,
    title: 'The Best',
    category: 'American',
    description:
      'Prepare-se para uma explosão de sabor com os nossos hambúrgueres gourmet. Carnes suculentas, queijos derretidos e acompanhamentos frescos garantem uma experiência americana autêntica!',
    infos: ['Especial'],
    image: american,
    grade: '4.8'
  },
  {
    id: 6,
    title: 'Pura Vita',
    category: 'Mediterranean',
    description:
      'Descubra os sabores vibrantes e saudáveis da cozinha mediterrânea em nosso restaurante. De falafel crocante a saladas frescas e pratos de frutos do mar, nossa culinária é uma celebração da vida pura!',
    infos: ['Novo'],
    image: mediterranean,
    grade: '4.9'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList options={restaurants} />
    <Footer />
  </>
)

export default Home
