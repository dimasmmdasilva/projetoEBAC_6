// PerfilButton/index.tsx
import { PerfilButtonCard } from './styles'

type Props = {
  openModal: () => void // Remova onClick e use apenas openModal
  children: string
}

export const PerfilButton = ({ openModal, children }: Props) => {
  return (
    <PerfilButtonCard type="button" onClick={openModal}>
      {children}
    </PerfilButtonCard>
  )
}

export default PerfilButton
