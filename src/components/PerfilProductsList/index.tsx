import Options from '../../models/Options'
import PerfilProduct from '../PerfilProduct'

import { PerfilContainer, List } from './styles'

export type Props = {
  options: Options[]
}

export const PerfilList = ({ options }: Props) => (
  <PerfilContainer>
    <List>
      {options.map((option) => (
        <PerfilProduct
          key={option.id}
          title={option.title}
          category={option.category}
          image={option.image}
          description={option.description}
          infos={option.infos}
        />
      ))}
    </List>
  </PerfilContainer>
)

export default PerfilList
