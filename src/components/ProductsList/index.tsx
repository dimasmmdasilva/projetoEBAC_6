import Options from '../../models/Options'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  options: Options[]
}

export const ProductsList = ({ options }: Props) => (
  <Container>
    <div className="container">
      <List>
        {options.map((option) => (
          <Product
            key={option.id}
            title={option.title}
            category={option.category}
            image={option.image}
            description={option.description}
            infos={option.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
