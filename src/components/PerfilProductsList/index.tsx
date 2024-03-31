import Options from '../../models/Options'
import PerfilProduct from '../PerfilProduct'

import { Container, List } from './styles'

export type Props = {
  options: Options[]
}

export const PerfilList = ({ options }: Props) => (
  <Container>
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
  </Container>
)

export default PerfilList
