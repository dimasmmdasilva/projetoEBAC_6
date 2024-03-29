import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
