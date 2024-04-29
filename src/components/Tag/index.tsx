// Tag/index.tsx

import { TagCards } from './styles'

export type Props = {
  children: string
}

export const Tag = ({ children }: Props) => <TagCards>{children}</TagCards>

export default Tag
