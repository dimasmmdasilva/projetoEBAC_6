// PerfilButton/index.tsx
import { PerfilButtonCard } from './styles'

type Props = {
  onClick?: () => void
  openModal: () => void // Adicionando prop openModal
  children: string
}

export const PerfilButton = ({ onClick, openModal, children }: Props) => {
  const handleClick = () => {
    openModal() // Chamar a função openModal ao clicar no botão
    if (onClick) onClick() // Executar a função onClick, se existir
  }

  return (
    <PerfilButtonCard type="button" onClick={handleClick}>
      {children}
    </PerfilButtonCard>
  )
}

export default PerfilButton
