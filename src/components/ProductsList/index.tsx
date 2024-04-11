// ProductsList/index.tsx
import React from 'react'
import Product from '../Product'
import { Container, List } from './styles'
import { Restaurant } from '../../pages/Home'
import { Link } from 'react-router-dom' // Importe o Link para lidar com a navegação

interface ProductsListProps {
  restaurants: Restaurant[]
}

const ProductsList: React.FC<ProductsListProps> = ({ restaurants }) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <Link key={restaurant.id} to={`/perfil/${restaurant.id.toString()}`}>
          <Product
            id={restaurant.id}
            nome={restaurant.titulo}
            descricao={restaurant.descricao}
            foto={restaurant.capa}
            avaliacao={restaurant.avaliacao}
            tipo={restaurant.tipo}
            destacado={restaurant.destacado}
          />
        </Link>
      ))}
    </List>
  </Container>
)

export default ProductsList
