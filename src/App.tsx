// App.tsx
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles'
import { store } from './store'
import Rotas from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
