// PerfilList.tsx
import React from 'react'
import PerfilProduct from '../PerfilProduct'
import { PerfilContainer, List } from './styles'
import { Restaurant, MenuItem } from '../../pages/Home'

interface PerfilListProps {
  restaurant: Restaurant | null
}

const PerfilList: React.FC<PerfilListProps> = ({ restaurant }) => {
  if (!restaurant || !restaurant.cardapio) return null

  return (
    <PerfilContainer>
      <h2>{restaurant.titulo}</h2>
      <List>
        <ul>
          {restaurant.cardapio.map((menuItem: MenuItem) => (
            <PerfilProduct
              key={menuItem.id}
              nome={menuItem.nome}
              descricao={menuItem.descricao}
              preco={menuItem.preco}
              porcao={menuItem.porcao}
              foto={menuItem.foto}
              avaliacao={restaurant.avaliacao}
            />
          ))}
        </ul>
      </List>
    </PerfilContainer>
  )
}

export default PerfilList
