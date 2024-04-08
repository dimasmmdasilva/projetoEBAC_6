import { CardContainer, Grade, InfoContainer, StarImage } from './styles'
import ButtonCard from '../Button'
import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import { Title, Description, Infos, CardInfo, Img } from './styles'
import star from '../../assets/images/star.png'

type Props = {
  title: string
  category: string
  image: string
  description: string
  infos: string[]
  grade: string
}

export const Product = ({
  title,
  category,
  image,
  description,
  infos,
  grade
}: Props) => (
  <CardContainer>
    <Img src={image} />
    <Infos>
      <Tag>{category}</Tag>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardInfo>
      <InfoContainer>
        <Title>{title}</Title>
        <Grade>{grade}</Grade>
        <StarImage src={star} alt="Star" />
      </InfoContainer>
      <Description>{description}</Description>
      <ButtonContainer>
        <ButtonCard
          type="link"
          to="/perfil"
          title="Clique aqui para saber mais"
        >
          Saiba mais
        </ButtonCard>
      </ButtonContainer>
    </CardInfo>
  </CardContainer>
)

export default Product
