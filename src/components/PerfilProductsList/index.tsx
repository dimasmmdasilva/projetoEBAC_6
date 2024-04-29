// PerfilProductsList/index.tsx

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
      <List>
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
      </List>
    </PerfilContainer>
  )
}

export default PerfilList
