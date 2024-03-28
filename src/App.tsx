import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyles } from './styles'

import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
