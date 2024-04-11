// ProductsList/index.tsx
import React from 'react'
import Product from '../Product'
import { Container, List } from './styles'
import { Restaurant } from '../../pages/Home'

interface ProductsListProps {
  restaurants: Restaurant[]
}

const ProductsList: React.FC<ProductsListProps> = ({ restaurants }) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <Product
          key={restaurant.id}
          id={restaurant.id}
          nome={restaurant.titulo}
          descricao={restaurant.descricao}
          foto={restaurant.capa}
          avaliacao={restaurant.avaliacao}
          tipo={restaurant.tipo}
          destacado={restaurant.destacado}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
