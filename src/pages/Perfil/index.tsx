import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Options from '../../models/Options'
import pizzaefood from '../../assets/images/pizzaefood.jpg'
import { PerfilList } from '../../components/PerfilProductsList'
import PerfilHeader from '../../components/PerfilHeader'

const menu: Options[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Destaque'],
    image: pizzaefood,
    grade: '4.5'
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Destaque'],
    image: pizzaefood,
    grade: '4.5'
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Destaque'],
    image: pizzaefood,
    grade: '4.5'
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Destaque'],
    image: pizzaefood,
    grade: '4.5'
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Destaque'],
    image: pizzaefood,
    grade: '4.5'
  },
  {
    id: 1,
    title: 'Pizza Marguerita',
    category: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Destaque'],
    image: pizzaefood,
    grade: '4.5'
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
