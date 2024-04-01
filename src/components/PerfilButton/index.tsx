import { PerfilButtonCard } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

export const PerfilButton = ({ type, title, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <PerfilButtonCard type="button" title={title} onClick={onClick}>
        {children}
      </PerfilButtonCard>
    )
  }
}

export default PerfilButton
